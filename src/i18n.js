import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import translationEN from "./locales/en/translation.json"
import translationPT from "./locales/pt/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
}

const savedLanguage = localStorage.getItem("i18nextLng")
const defaultLanguage = savedLanguage || "pt"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: "pt",
    debug: process.env.NODE_ENV === "development",

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
  })

if (!savedLanguage) {
  localStorage.setItem("i18nextLng", defaultLanguage)
}

export default i18n
