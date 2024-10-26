import React from "react";
import aboutUs from "../images/aboutUs.jpg";
import translations from "../data/translations.json";

const AboutUs = ({ language }) => {
  return (
    <section className="container about">
      <h2 className="about__title">{translations[language].about.title}</h2>
      <div className="about__image-wrapper">
        <img src={aboutUs} alt="owners" className="about__image"></img>
        <div className="about__frame"></div>
      </div>
      <p className="about__subtitle">{translations[language].about.subtitle}</p>
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
    </section>
  );
};

export default AboutUs;
