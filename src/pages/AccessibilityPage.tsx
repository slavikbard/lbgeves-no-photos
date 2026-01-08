import Breadcrumb from '../components/Breadcrumb';

const AccessibilityPage = () => {
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
          <Breadcrumb items={[{ label: 'בית', path: '/' }, { label: 'הצהרת נגישות' }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-4">
            הצהרת נגישות
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">מחויבות לנגישות</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              LBGEVES מחויבת להנגשת אתר האינטרנט שלה לאנשים עם מוגבלות ולספק חוויית גלישה נוחה, נגישה ושוויונית לכלל המשתמשים. אנו עושים מאמצים מתמידים להגביר את הנגישות והשימושיות באתר, תוך הקפדה על עמידה בתקן הישראלי (ת״י 5568) ועקרונות ה-WCAG 2.1 ברמה AA.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">התאמות הנגישות באתר</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              האתר מותאם לדפדפנים העיקריים ולמכשירים ניידים, ומיועד לשימוש נגיש עבור כלל המשתמשים. התאמות הנגישות כוללות:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4">
              <li>ניווט באמצעות מקלדת - ניתן לנווט באתר באמצעות מקשי Tab ו-Enter</li>
              <li>תמיכה בקוראי מסך - האתר מותאם לשימוש בתוכנות הקראת מסך</li>
              <li>ניגודיות גבוהה - שימוש בצבעים בעלי ניגודיות מספקת לנוחות הקריאה</li>
              <li>טקסטים חלופיים - תמונות כוללות תיאורים טקסטואליים</li>
              <li>מבנה היררכי ברור - כותרות ותפריטים מסודרים לוגית</li>
              <li>גודל גופן גמיש - ניתן להגדיל את הגופן באמצעות הדפדפן</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">דפדפנים נתמכים</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              האתר תומך בדפדפנים העיקריים הבאים בגרסאות העדכניות ביותר:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
              <li>Apple Safari</li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              מומלץ להשתמש בגרסה עדכנית של הדפדפן להבטחת פעולה תקינה ונגישות מיטבית.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">שימוש בטכנולוגיות מסייעות</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              האתר תוכנן לשימוש עם טכנולוגיות מסייעות, לרבות:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mr-4">
              <li>תוכנות הקראת מסך (Screen Readers) כגון JAWS, NVDA ו-VoiceOver</li>
              <li>תוכנות הגדלת טקסט</li>
              <li>תוכנות זיהוי קולי</li>
              <li>ניווט באמצעות מקלדת בלבד</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">נגישות במכשירים ניידים</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              האתר מותאם לשימוש במכשירים ניידים (סמארטפונים וטאבלטים) בפלטפורמות iOS ו-Android, ותומך בטכנולוגיות הנגישות המובנות במערכות ההפעלה הללו.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">מגבלות ידועות</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              למרות המאמצים שלנו, ייתכנו חלקים באתר שטרם הונגשו במלואם. אנו עובדים כל העת על שיפור הנגישות ומזמינים אתכם ליצור קשר במקרה של קשיי נגישות.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">רכז נגישות</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              לשאלות, הערות או דיווח על בעיות נגישות, ניתן ליצור קשר עם רכז הנגישות:
            </p>
            <div className="space-y-2 text-gray-700 text-lg mr-4">
              <p>אנדריי: 0549252279</p>
              <p>ישראל: 0534299625</p>
              <p>דוא״ל: L.b.geves2016@gmail.com</p>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              אנו נעשה כמיטב יכולתנו לטפל בפנייה במהירות וביעילות.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">משוב ושיפור מתמיד</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              אנו רואים בנגישות מחויבות מתמשכת ומעודדים את המשתמשים לשתף אותנו במשוב על חוויית הנגישות באתר. המשוב שלכם חשוב לנו ויסייע לנו להמשיך ולשפר את הנגישות.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-light-blue-800 mb-4">סטטוס תקינה</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              הצהרת נגישות זו עודכנה לאחרונה בינואר 2026. אנו ממשיכים בבדיקות תקופתיות ובשיפור הנגישות באופן שוטף.
            </p>
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

export default AccessibilityPage;
