import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translate.json";
import arTranslation from "./locales/ar/translate.json";

export const resources = {
  en: enTranslation,
  ar: arTranslation,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    /* default language when load the website in browser */
    lng:
      localStorage.getItem("i18nextLng") ??
      process.env.REACT_APP_DEFAULT_LANGUAGE,
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: process.env.REACT_APP_DEFAULT_LANGUAGE,
    /* debugger For Development environment */
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
      bindI18n: "languageChanged",
      bindI18nStore: "added removed",
      nsMode: "default",
    },
  });

export default i18n;
