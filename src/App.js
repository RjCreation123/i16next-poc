// src/App.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("fr")}>Français</button>
    </div>
  );
}

export default App;
