import { Quote } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'צוות של קבלנים מקצועים ברמה הכי גבוהה שיכולה להיות עד הפרטים הכי קטנים, כל פרוייקט שאני עובדת איתם זה תענוג ובעיקר ראש שקט שהכל מתנהל לפי תוכניות, עמידה בזמנים, הגדלת ראש אחריות. ממליצה בחום!!',
      name: 'בתאל שיכוורגר',
      role: 'הנדסאית אדריכלות ומעצבת פנים, חברת ברטק הנדסה בע"מ',
    },
    {
      text: 'צוות של מקצוענים לא רק בהקמה אלא גם בניהול. מהרגע הראשון ועד המסירה הסופית נהנינו מכל רגע ומחכים כבר לפרויקט הבא איתכם. תודה על ההשקעה והמסירות. שמחים שבחרנו בכם.',
      name: 'גיל',
      role: 'בעלים של בים טים הנדסה וייעוץ בע״מ',
    },
    {
      text: 'ישראל הוא אחד האנשים הכי מקצועיים שאי פעם פגשתי. ביצע עבודת גבס ברמה גבוהה ביותר. כבר משלב התכנון והשרטוט אפשר היה לזהות שמדובר באדם מקצועי מאוד, בעל סטנדרטים גבוהים יכולת הקשבה והתאמה לצרכים האישיים שלנו תוך ירידה לפרטים הקטנים. הביצוע הסופי לא פחות ממושלם. ניכרה מחויבות לאיכות, סדר וניקיון ולא פחות חשוב מזה - עמידה בלוחות הזמנים שנקבעו. ממליצה בלב שלם. היה תענוג אמיתי לעבוד עם בעל מקצוע כזה. תודה על היחס החם ועל עבודה יוצאת דופן.',
      name: 'קרן',
      role: 'באר שבע',
    },
    {
      text: 'צוות מקצועי ואדיב, עבדנו יחד במספר פרוייקטים באזור באר שבע. עובדים מהר ואיכותי תוך דיוק גבוה (חשוב בגבס) במחירים שפויים, עומדים טוב בלוח זמנים באתר ותמיד חיוביים לתת יד ולעזור בכל מטרה. ללא ספק נעבוד בהמשך שוב יחד.',
      name: 'גיל',
      role: 'סמנכ"ל אביב יזמות ובניה בע"מ',
    },
    {
      text: 'לצוות אל.בי.גבס תודה על מתן שירות מקצועי, עבודה יוצאת מהכלל עם דיוק בפרטים הקטנים בדיוק כמו שביקשנו. השקעה בכל פרט המתוכנן לביצוע. אין ספק שנזכה למחמאות מכל באי ביתינו על עבודתכם.',
      name: 'ילנה גולדשטיין',
      role: 'מעצבת פנים',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-light-blue-800 mb-16">
          מה אומרים עלינו
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-light-blue-300 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-light-blue-300/30 transition-all duration-300 flex flex-col"
            >
              <Quote className="text-light-blue-300 mb-4" size={40} />
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow italic">
                {testimonial.text}
              </p>
              <div className="border-t-2 border-light-blue-100 pt-4">
                <p className="font-bold text-light-blue-800 text-lg">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-6">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            רוצים לקרוא עוד? מוזמנים לבקר בעמוד הפייסבוק שלנו ולראות מה לקוחות נוספים מספרים עלינו.
          </p>
          <a
            href="https://www.facebook.com/lbgeves?locale=he_IL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#145dbf] transition-all duration-300 shadow-lg"
          >
            <FaFacebook size={24} />
            <span>לעמוד הפייסבוק שלנו</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
