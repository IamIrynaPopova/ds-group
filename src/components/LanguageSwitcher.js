import React from "react";

const LanguageSwitcher = ({ onLanguageChange, language }) => {
  return (
    <div className="language__switcher">
      <button
        onClick={() => onLanguageChange("ua")}
        className={
          language === "ua" ? "language__button active" : "language__button"
        }
      >
        ua
      </button>
      <button
        onClick={() => onLanguageChange("en")}
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
