import { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { FaUniversalAccess, FaTextHeight, FaAdjust, FaUnderline, FaTimes } from 'react-icons/fa';
import { MdContrast } from 'react-icons/md';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    settings,
    increaseTextSize,
    decreaseTextSize,
    toggleGrayscale,
    toggleHighContrast,
    toggleUnderlineLinks,
    resetSettings,
  } = useAccessibility();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="תפריט נגישות"
      >
        <FaUniversalAccess className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-36 left-4 z-50 bg-white rounded-lg shadow-2xl p-6 w-80 max-w-[calc(100vw-2rem)] border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">הגדרות נגישות</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="סגור תפריט"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-2 text-gray-700">
                  <FaTextHeight className="w-5 h-5" />
                  גודל טקסט
                </span>
                <span className="text-sm text-gray-500">{settings.textSize}%</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={decreaseTextSize}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded transition-colors"
                  disabled={settings.textSize <= 80}
                >
                  הקטן
                </button>
                <button
                  onClick={increaseTextSize}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded transition-colors"
                  disabled={settings.textSize >= 150}
                >
                  הגדל
                </button>
              </div>
            </div>

            <button
              onClick={toggleGrayscale}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                settings.grayscale
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaAdjust className="w-5 h-5" />
              <span>מצב גווני אפור</span>
            </button>

            <button
              onClick={toggleHighContrast}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                settings.highContrast
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <MdContrast className="w-5 h-5" />
              <span>ניגודיות גבוהה</span>
            </button>

            <button
              onClick={toggleUnderlineLinks}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                settings.underlineLinks
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaUnderline className="w-5 h-5" />
              <span>קו תחתון לקישורים</span>
            </button>

            <button
              onClick={() => {
                resetSettings();
                setIsOpen(false);
              }}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded transition-colors mt-4"
            >
              איפוס הגדרות
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;
