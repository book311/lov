// Define regions and their corresponding languages
const MENA_COUNTRIES = [
  'SA', 'AE', 'QA', 'BH', 'KW', 'OM', 'YE', 'IQ', 'SY', 'LB', 
  'JO', 'PS', 'EG', 'SD', 'LY', 'TN', 'DZ', 'MA', 'MR'
];

export type Language = 'en' | 'ar';

export const getDefaultLanguage = async (): Promise<Language> => {
  try {
    // First try to get from localStorage
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang) return savedLang;

    // Then try to get from browser settings
    const browserLangs = navigator.languages || [navigator.language];
    const primaryLang = browserLangs[0].split('-')[0];
    const countryCode = browserLangs[0].split('-')[1];

    // Check if the country code is in MENA region
    if (MENA_COUNTRIES.includes(countryCode)) {
      return 'ar';
    }

    // Check if the primary language is Arabic
    if (primaryLang === 'ar') {
      return 'ar';
    }

    // Default to English
    return 'en';
  } catch (error) {
    console.log('Error detecting language:', error);
    return 'en'; // Default to English if detection fails
  }
};

export const setLanguagePreference = (lang: Language) => {
  localStorage.setItem('preferredLanguage', lang);
};