import React,{useState,useEffect} from "react";
import translations from "../data/translations.json";
import danser1 from "../images/danser1.png";
import danser2 from "../images/danser2.png";
import danser3 from "../images/danser3.png";
import logo from "../images/logo.png";

const Hero = ({ language, showTitle }) => {

  return (
    <section className={`container hero ${showTitle ? "animate" : ""}`}>
      <h1 className={`hero__title ${showTitle ? "animate" : ""}`}>
        {translations[language].hero.title}
      </h1>
      <p className={`hero__subtitle ${showTitle ? "animate" : ""}`}>
        {translations[language].hero.subtitle}
      </p>
      <div className={`hero__background ${showTitle ? "animate" : ""}`}>
        <img className="hero__background-image" src={danser1} alt="danser" />
        <img
          className={`hero__background-image ${showTitle ? "animate" : ""}`}
          src={danser2}
          alt="danser"
        />
        <img className="hero__background-image" src={danser3} alt="danser" />
      </div>
      <img className="hero__background-logo" src={logo} alt="logo" />
    </section>
  );
};

export default Hero;
