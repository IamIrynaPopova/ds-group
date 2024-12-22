import React, { useState } from "react";
import translations from "../data/translations.json";
import Form from "./Form";

const Contacts = ({ language }) => {
  return (
    <section className="contacts container" id="contacts">
      <h2 className="contacts__title">
        {translations[language].contacts.title}
      </h2>
      <address className="contacts__address">
        <ul className="contacts__list">
          <li className="contacts__item">
            <h3 className="contacts__subtitle">
              {translations[language].contacts.subtitle_address}
            </h3>
            <p className="contacts__text">
              {translations[language].contacts.address1}
            </p>
            <p className="contacts__text">
              {translations[language].contacts.address2}
            </p>
          </li>
          <li className="contacts__item">
            <h3 className="contacts__subtitle">
              {translations[language].contacts.subtitle_email}
            </h3>
            <p className="contacts__text">
              {translations[language].contacts.email}
            </p>
          </li>
          <li className="contacts__item">
            <h3 className="contacts__subtitle">
              {translations[language].contacts.subtitle_tel}
            </h3>
            <p className="contacts__text">
              {translations[language].contacts.tel}
            </p>
          </li>
        </ul>
      </address>
      <h2 className="contacts__title-form">
        {translations[language].contacts.title_form}
      </h2>
      <Form
        language={language}
        title={"Форма заповнена з головної сторінки"}
        onCloseForm={() => {}}
      />
    </section>
  );
};

export default Contacts;
