import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDefaultLanguage, setLanguagePreference, Language } from '../utils/languageDetection';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initLanguage = async () => {
      const defaultLang = await getDefaultLanguage();
      setCurrentLanguage(defaultLang);
      setIsLoading(false);
    };

    initLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    setLanguagePreference(lang);
    if (lang === 'ar') {
      navigate('/ar');
    } else {
      navigate('/');
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};