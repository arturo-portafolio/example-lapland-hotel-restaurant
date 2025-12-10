import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Language } from './translations';

interface LanguageContextType {
  currentLang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('fi');

  const setLang = useCallback((lang: Language) => {
    setCurrentLang(lang);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[currentLang][key] || key;
  }, [currentLang]);

  return (
    <LanguageContext.Provider value={{ currentLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
