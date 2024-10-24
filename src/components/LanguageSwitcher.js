import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("ua");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="language__switcher">
      <button
        onClick={() => handleLanguageChange("ua")}
        className={
          language === "ua" ? "language__button active" : "language__button"
        }
      >
        ua
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={
          language === "en" ? "language__button active" : "language__button"
        }
      >
        en
      </button>
    </div>
  );
};

export default LanguageSwitcher;
