import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import TRANSLATIONS_EN from "./assets/translations/en.json";
import TRANSLATIONS_PTBR from "./assets/translations/ptBr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      ptBR: {
        translation: TRANSLATIONS_PTBR
      }
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false
    }
  });

export { i18n };