import Breadcrumb from '../components/Breadcrumb';

const PrivacyPage = () => {
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
          <Breadcrumb items={[{ label: 'בית', path: '/' }, { label: 'מדיניות פרטיות' }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-4">
            מדיניות פרטיות
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">הקדמה</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              אנו ב-LBGEVES מחויבים להגנה על פרטיותכם. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">איסוף מידע</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              אנו אוספים מידע שאתם מספקים לנו באופן ישיר, כולל:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4">
              <li>שם מלא</li>
              <li>כתובת דואר אלקטרוני</li>
              <li>מספר טלפון</li>
              <li>תוכן ההודעות שנשלחות דרך טופס יצירת הקשר</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">שימוש במידע</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              אנו משתמשים במידע שנאסף למטרות הבאות:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4">
              <li>מענה לפניות ושאלות שלכם</li>
              <li>מתן שירות ותמיכה ללקוחות</li>
              <li>שיפור השירותים והחוויה שלנו</li>
              <li>שליחת עדכונים ומידע שיווקי (רק עם הסכמתכם)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">הגנה על מידע</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם מפני גישה, שימוש או גילוי לא מורשים. המידע מאוחסן בשרתים מאובטחים ומוגנים בסיסמאות ואמצעי הצפנה מתאימים.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">שיתוף מידע עם צדדים שלישיים</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              אנו לא משתפים, מוכרים או מעבירים את המידע האישי שלכם לצדדים שלישיים, למעט במקרים הבאים:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4 mt-4">
              <li>כאשר נדרש על פי חוק</li>
              <li>כדי להגן על זכויותינו או רכושנו</li>
              <li>עם ספקי שירות שעובדים בשמנו (תחת הסכמי סודיות מחמירים)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">עוגיות (Cookies)</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              אתר זה משתמש בעוגיות כדי לשפר את חווית המשתמש. עוגיות הן קבצי טקסט קטנים המאוחסנים במכשיר שלכם. אתם יכולים לשלוט בעוגיות דרך הגדרות הדפדפן שלכם.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">זכויות המשתמש</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              יש לכם את הזכויות הבאות בנוגע למידע האישי שלכם:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4">
              <li>זכות עיון במידע המוחזק אודותיכם</li>
              <li>זכות לתיקון מידע שגוי</li>
              <li>זכות למחיקת מידע</li>
              <li>זכות להתנגד לשימוש במידע למטרות שיווקיות</li>
              <li>זכות לבטל הסכמה שניתנה</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">שינויים במדיניות</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר עם תאריך העדכון.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">יצירת קשר</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              לשאלות או בקשות בנוגע למדיניות הפרטיות, ניתן ליצור קשר:
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

export default PrivacyPage;
