import { UserCheck, Award, Clock, MessageCircle, Briefcase } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <UserCheck size={48} />,
      title: 'ליווי אישי עד המפתח',
      description: 'תכנון וביצוע מדויק מלווים בשירות אישי, מקצועי ונגיש – לכל אורך הדרך.',
    },
    {
      icon: <Award size={48} />,
      title: 'אחריות מלאה ואיכות ללא פשרות',
      description: 'אנחנו מחויבים לשלמות הביצוע – בכל פרויקט, בכל שלב.',
    },
    {
      icon: <Clock size={48} />,
      title: 'דיוק, הקפדה ועמידה בזמנים',
      description: 'עבודה מסודרת, מתוכננת ומדויקת – בדיוק כפי שהובטח.',
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'יחס אישי ותקשורת ישירה',
      description: 'לקוחותינו נהנים משקיפות מלאה, זמינות גבוהה וחוויית שירות שמציבה אותם במרכז.',
    },
    {
      icon: <Briefcase size={48} />,
      title: 'ניסיון רב שנים במגזר הפרטי, העסקי והציבורי',
      description: 'צוות מקצועי עם עשרות פרויקטים מוצלחים בכל רחבי הדרום.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-light-blue-800 mb-16">
          למה לבחור ב-אל.בי. גבס ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:shadow-light-blue-300/30 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full"
            >
              <div className="text-light-blue-300 mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-light-blue-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
