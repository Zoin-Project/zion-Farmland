import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEnglish from './translation/en-lang.json';
import translationLao from './translation/la-lang.json';
import translationChinese from './translation/cn-lnag.json';

i18n
  .use(LanguageDetector) // Auto-detects language from browser/localStorage
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: translationEnglish },
      la: { translation: translationLao },
      cn: { translation: translationChinese },
    },
    detection: {
      order: ['localStorage', 'navigator'], // Detect from localStorage first
      caches: ['localStorage'], // Save selected language in localStorage
    },
  });

export default i18n;
