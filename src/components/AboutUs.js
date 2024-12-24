import React from "react";
import aboutUs from "../images/aboutUs.jpg";
import Form from "../components/Form";
import translations from "../data/translations.json";

const AboutUs = ({ language, closeForm, openForm }) => {
  return (
    <section className="about container" id="about_us">
      <h2 className="about__title">{translations[language].about.title}</h2>
      <div className="about__image-wrapper">
        <img src={aboutUs} alt="owners" className="about__image"></img>
        <div className="about__frame"></div>
      </div>
      <div className="about__text-box">
        <p className="about__subtitle">
          {translations[language].about.subtitle}
        </p>
        <p className="about__text">
          {translations[language].about.text1} <br></br>
          {translations[language].about.text2}
        </p>
        <p className="about__text">{translations[language].about.text3}</p>
        <p className="about__text">
          {translations[language].about.text4}
          <br></br> {translations[language].about.text5}
        </p>
        <p className="about__text">
          {translations[language].about.text6}
          <br></br> {translations[language].about.text7}
        </p>
        <p className="about__text-main">
          {translations[language].about.text_main}
        </p>
      </div>
      <button className="about__button" type="button" onClick={openForm}>
        {translations[language].button.contact}
      </button>
      <Form
        language={language}
        title={"Хочу дізнатись більше про колектив"}
        onCloseForm={closeForm}
      />
    </section>
  );
};

export default AboutUs;
