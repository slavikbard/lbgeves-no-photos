import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-light-blue-300 shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center md:text-right">
            <p className="text-gray-800 text-lg leading-relaxed">
              אנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלכם באתר ולספק שירות מותאם אישית.
              על ידי המשך שימוש באתר, אתם מסכימים לשימוש בעוגיות.
              <Link to="/privacy" className="text-light-blue-800 hover:underline font-semibold mx-1">
                קרא עוד במדיניות הפרטיות
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="bg-light-blue-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-light-blue-800 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              אני מסכים/ה
            </button>
            <button
              onClick={handleDecline}
              className="bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              דחייה
            </button>
            <button
              onClick={handleDecline}
              className="text-gray-500 hover:text-gray-700 transition-colors p-2"
              aria-label="סגור"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
