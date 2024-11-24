import React from "react";
import translations from "../data/translations.json";
import Form from "./Form";

const Contacts = ({ language }) => {
  const formStyle = {
    visibility: "visible",
    position: "static",
    transform: "none",
    animation: "none",
    opacity: "1",
    padding: "0",
    maxWidth: "343px",
    border: "none",
    background: "transparent",
  };

  const buttonStyle = {
    display: "none",
  };
  const titleStyle = {
    color: "inherit",
    textAlign: "center",
    marginBottom: "46px",
  };
  const inputStyle = {
    maxWidth: "343px",
    background: "transparent",
    marginBottom: "46px",
    color: "var(--text-default)",
  };
  const textareaStyle = {
    maxWidth: "343px",
    background: "transparent",
    borderRadius: "initial",
    border: "1px solid #fff",
    marginBottom: "46px",
    color: "var(--text-default)",
  };
  const submitStyle = {
    width: "343px",
  };
  return (
    <section className="container contacts">
      <h2 className="contacts__title">
        {translations[language].contacts.title}
      </h2>
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
      <h2 className="contacts__title-form">
        {translations[language].contacts.title_form}
      </h2>
      <Form
        language={language}
        formStyle={formStyle}
        buttonStyle={buttonStyle}
        titleStyle={titleStyle}
        title={"Форма заповнена з головної сторінки"}
        formTitle={translations[language].form.title_main_page}
        inputStyle={inputStyle}
        textareaStyle={textareaStyle}
        submitStyle={submitStyle}
        onCloseForm={() => {}}
      />
    </section>
  );
};

export default Contacts;
