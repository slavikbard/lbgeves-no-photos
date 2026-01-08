import Breadcrumb from '../components/Breadcrumb';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <div
        className="relative h-64 flex items-center justify-center mt-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-light-blue-800 bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={[{ label: 'בית', path: '/' }, { label: 'תנאי שימוש' }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-4">
            תנאי שימוש
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">הקדמה</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              ברוכים הבאים לאתר LBGEVES. תנאי שימוש אלה מסדירים את השימוש שלכם באתר ובשירותים שלנו. על ידי שימוש באתר, אתם מסכימים לתנאים אלה במלואם.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">שימוש באתר</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              אתם מתחייבים להשתמש באתר באופן חוקי ובהתאם להוראות הבאות:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4">
              <li>לא לעשות שימוש באתר למטרות בלתי חוקיות</li>
              <li>לא להעתיק, לשכפל או להפיץ תוכן מהאתר ללא אישור</li>
              <li>לא להפריע לתפקוד התקין של האתר</li>
              <li>לא לנסות לקבל גישה לא מורשית למערכות או לרשתות המחוברות לאתר</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">קניין רוחני</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              כל התוכן באתר, לרבות טקסט, תמונות, לוגו, גרפיקה ועיצוב, הוא רכושה הבלעדי של LBGEVES ומוגן על פי חוקי זכויות יוצרים וקניין רוחני. אין לעשות שימוש בתוכן זה ללא אישור מפורש בכתב.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">שירותים מוצעים</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              אנו מספקים מידע אודות שירותי עבודות גמר ושיפוצים. המידע באתר מוצג לנוחותכם והוא כפוף לשינויים ללא הודעה מוקדמת. אנו עושים את מירב המאמצים לספק מידע מדויק ועדכני, אך לא נישא באחריות לטעויות או השמטות.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">הגבלת אחריות</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              השימוש באתר נעשה על אחריותכם בלבד. אנו לא נהיה אחראים לכל נזק ישיר, עקיף, מקרי או תוצאתי הנובע מ:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4">
              <li>שימוש או חוסר יכולת להשתמש באתר</li>
              <li>כל מידע או שירות שהתקבל דרך האתר</li>
              <li>גישה לא מורשית או שינוי של נתונים</li>
              <li>תקלות טכניות או הפסקות בשירות</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">קישורים לאתרים חיצוניים</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              האתר עשוי לכלול קישורים לאתרים חיצוניים. אנו לא אחראים לתוכן, למדיניות הפרטיות או לפרקטיקות של אתרים אלה. השימוש באתרים חיצוניים נעשה על אחריותכם בלבד.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">שינויים בתנאי השימוש</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              אנו שומרים לעצמנו את הזכות לשנות את תנאי השימוש מעת לעת. שינויים ייכנסו לתוקף מיד עם פרסומם באתר. המשך השימוש באתר לאחר השינויים מהווה הסכמה לתנאים המעודכנים.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">סמכות שיפוט</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              תנאי שימוש אלה כפופים לחוקי מדינת ישראל. כל סכסוך הנוגע לשימוש באתר יידון בבתי המשפט המוסמכים בישראל.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">יצירת קשר</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              לשאלות או הבהרות בנוגע לתנאי השימוש, ניתן ליצור קשר:
            </p>
            <div className="mt-4 space-y-2 text-gray-700 text-lg mr-4">
              <p>אנדריי: 0549252279</p>
              <p>ישראל: 0534299625</p>
              <p>דוא״ל: L.b.geves2016@gmail.com</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              עדכון אחרון: ינואר 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
