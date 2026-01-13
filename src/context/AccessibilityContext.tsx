import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilitySettings {
  textSize: number;
  grayscale: boolean;
  highContrast: boolean;
  underlineLinks: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  toggleGrayscale: () => void;
  toggleHighContrast: () => void;
  toggleUnderlineLinks: () => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  textSize: 100,
  grayscale: false,
  highContrast: false,
  underlineLinks: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('accessibilitySettings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (settings: AccessibilitySettings) => {
    document.documentElement.style.fontSize = `${settings.textSize}%`;

    if (settings.grayscale) {
      document.documentElement.style.filter = 'grayscale(100%)';
    } else {
      document.documentElement.style.filter = 'none';
    }

    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.underlineLinks) {
      document.documentElement.classList.add('underline-links');
    } else {
      document.documentElement.classList.remove('underline-links');
    }
  };

  const increaseTextSize = () => {
    setSettings(prev => ({
      ...prev,
      textSize: Math.min(prev.textSize + 10, 150)
    }));
  };

  const decreaseTextSize = () => {
    setSettings(prev => ({
      ...prev,
      textSize: Math.max(prev.textSize - 10, 80)
    }));
  };

  const toggleGrayscale = () => {
    setSettings(prev => ({ ...prev, grayscale: !prev.grayscale }));
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleUnderlineLinks = () => {
    setSettings(prev => ({ ...prev, underlineLinks: !prev.underlineLinks }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        increaseTextSize,
        decreaseTextSize,
        toggleGrayscale,
        toggleHighContrast,
        toggleUnderlineLinks,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
