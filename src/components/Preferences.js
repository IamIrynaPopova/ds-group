import React from "react";
import translations from "../data/translations.json";

const Preferences = ({ language }) => {
  return (
    <section className="preferences container">
      <h2 className="preferences__title">
        {translations[language].preferences.title}
      </h2>
      <ul className="preferences__list">
        <li className="preferences__item">
          {translations[language].preferences.preference1}
        </li>
        <li className="preferences__item">
          {translations[language].preferences.preference2}
        </li>
        <li className="preferences__item">
          {translations[language].preferences.preference3}
        </li>
        <li className="preferences__item">
          {translations[language].preferences.preference4}
        </li>
        <li className="preferences__item">
          {translations[language].preferences.preference5}
        </li>
        <li className="preferences__item">
          {translations[language].preferences.preference6}
        </li>
      </ul>
    </section>
  );
};

export default Preferences;
