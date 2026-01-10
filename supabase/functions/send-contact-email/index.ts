import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  consent: boolean;
  privacyPolicy: boolean;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (!formData.privacyPolicy) {
      return new Response(
        JSON.stringify({ error: "Privacy policy must be accepted" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; direction: rtl; text-align: right; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #93c5fd; padding-bottom: 10px;">פנייה חדשה מטופס יצירת קשר</h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>שם:</strong> ${formData.name}</p>
          <p style="margin: 10px 0;"><strong>דואר אלקטרוני:</strong> ${formData.email}</p>
          ${formData.phone ? `<p style="margin: 10px 0;"><strong>טלפון:</strong> ${formData.phone}</p>` : ""}
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #1e40af;">הודעה:</h3>
          <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; line-height: 1.6;">${formData.message}</p>
        </div>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
          <p style="margin: 5px 0;"><strong>הסכמה לדיוור:</strong> ${formData.consent ? "כן" : "לא"}</p>
          <p style="margin: 5px 0;"><strong>אישור מדיניות פרטיות:</strong> ${formData.privacyPolicy ? "כן" : "לא"}</p>
        </div>
        
        <p style="color: #6b7280; font-size: 12px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          נשלח מאתר LBGEVES ב-${new Date().toLocaleString("he-IL")}
        </p>
      </div>
    `;

    const emailText = `
פנייה חדשה מטופס יצירת קשר

שם: ${formData.name}
דואר אלקטרוני: ${formData.email}
${formData.phone ? `טלפון: ${formData.phone}\n` : ""}\nהודעה:\n${formData.message}

הסכמה לדיוור: ${formData.consent ? "כן" : "לא"}
אישור מדיניות פרטיות: ${formData.privacyPolicy ? "כן" : "לא"}

נשלח ב-${new Date().toLocaleString("he-IL")}
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "LBGEVES Contact Form <onboarding@resend.dev>",
        to: ["L.b.geves2016@gmail.com"],
        subject: `פנייה חדשה מ-${formData.name}`,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const result = await resendResponse.json();

    return new Response(
      JSON.stringify({ success: true, messageId: result.id }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message", details: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});