// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our site!",
      description: "This is a basic POC using i18next with React.",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur notre site!",
      description: "C'est une preuve de concept de base utilisant i18next avec React.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
