import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'יש למלא שם מלא';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'יש למלא כתובת דואר אלקטרוני';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת דואר אלקטרוני לא תקינה';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'יש למלא הודעה';
    }

    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = 'יש לאשר את מדיניות הפרטיות';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
          privacyPolicy: false,
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } catch (error) {
        console.error('Error sending message:', error);
        setErrors({ submit: 'שגיאה בשליחת ההודעה. אנא נסה שוב.' });
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-light-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-light-blue-800 mb-4">
            צור קשר
          </h2>
          <p className="text-xl text-gray-600">
            נשמח לשמוע מכם ולענות על כל שאלה
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-light-blue-800 mb-6">
                פרטי יצירת קשר
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-lg">
                  <Phone className="text-light-blue-300" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">אנדריי: 0549252279</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Phone className="text-light-blue-300" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">ישראל: 0534299625</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Mail className="text-light-blue-300" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">L.b.geves2016@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
           <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-light-blue-800 font-semibold mb-2"
                >
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="השם המלא שלך"
                  className="w-full px-4 py-3 border-2 border-light-blue-300 rounded-lg focus:border-light-blue-800 focus:outline-none focus:ring-2 focus:ring-light-blue-300 transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-light-blue-800 font-semibold mb-2"
                >
                  דואר אלקטרוני *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border-2 border-light-blue-300 rounded-lg focus:border-light-blue-800 focus:outline-none focus:ring-2 focus:ring-light-blue-300 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-light-blue-800 font-semibold mb-2"
                >
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="050-1234567"
                  className="w-full px-4 py-3 border-2 border-light-blue-300 rounded-lg focus:border-light-blue-800 focus:outline-none focus:ring-2 focus:ring-light-blue-300 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-light-blue-800 font-semibold mb-2"
                >
                  הודעה *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ספרו לנו על הפרויקט שלכם..."
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-light-blue-300 rounded-lg focus:border-light-blue-800 focus:outline-none focus:ring-2 focus:ring-light-blue-300 transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-light-blue-300 border-gray-300 rounded focus:ring-light-blue-300"
                  />
                  <label htmlFor="privacyPolicy" className="text-gray-700 text-sm">
                    אני מאשר/ת כי קראתי והסכמתי ל
                    <Link to="/privacy" className="text-light-blue-800 hover:underline font-semibold mx-1">
                      מדיניות הפרטיות
                    </Link>
                    *
                  </label>
                </div>
                {errors.privacyPolicy && (
                  <p className="text-red-500 text-sm mt-1 mr-8">{errors.privacyPolicy}</p>
                )}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-light-blue-300 border-gray-300 rounded focus:ring-light-blue-300"
                />
                <label htmlFor="consent" className="text-gray-700 text-sm">
                  אני מאשר/ת דיוור ומידע פרסומי
                </label>
              </div>

              {isSubmitted && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
                  ההודעה נשלחה בהצלחה! נחזור אליך בהקדם
                </div>
              )}

              {errors.submit && (
                <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
                  {errors.submit}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-light-blue-300 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-light-blue-800 transition-all duration-300 shadow-lg"
              >
                שלח
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
