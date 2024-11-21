import React from "react";
import translations from "../data/translations.json";

const Contacts = ({ language }) => {
  return (
    <section className="container сontacts">
      <h2 className="сontacts__title">
        {translations[language].сontacts.title}
      </h2>
      <ul className="сontacts__list">
        <li className="сontacts__item">
          <h3 className="сontacts__subtitle">
            {translations[language].сontacts.subtitle_address}
          </h3>
          <p className="сontacts__text">
            {translations[language].сontacts.address1}
          </p>
          <p className="сontacts__text">
            {translations[language].сontacts.address2}
          </p>
        </li>
        <li className="сontacts__item">
          <h3 className="сontacts__subtitle">
            {translations[language].сontacts.subtitle_email}
          </h3>
          <p className="сontacts__text">
            {translations[language].сontacts.email}
          </p>
        </li>
        <li className="сontacts__item">
          <h3 className="сontacts__subtitle">
            {translations[language].сontacts.subtitle_tel}
          </h3>
          <p className="сontacts__text">
            {translations[language].сontacts.tel}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
