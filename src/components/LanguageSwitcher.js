import React from "react";

const LanguageSwitcher = ({ onLanguageChange, language }) => {
  return (
    <div className="language__switcher">
      <button
        onClick={() => onLanguageChange("ua")}
        className={language === "ua" ? "language__button active" : "language__button"}
        aria-pressed={language === "ua"}
        aria-label="Switch to Ukrainian"
      >
        ua
      </button>
      <button
        onClick={() => onLanguageChange("en")}
        className={language === "en" ? "language__button active" : "language__button"}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
      >
        en
      </button>
    </div>
  );
};

export default LanguageSwitcher;
