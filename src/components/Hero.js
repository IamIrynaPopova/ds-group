import React,{useState,useEffect} from "react";
import translations from "../data/translations.json";
import danser1 from "../images/danser1.png";
import danser2 from "../images/danser2.png";
import danser3 from "../images/danser3.png";
import logo from "../images/logo.png";

const Hero = ({language}) => {

  return (
    <section className="container hero">
      <h1 className="hero__title">
        {translations[language].hero.title}
      </h1>
      <p className="hero__subtitle">
        {translations[language].hero.subtitle}
      </p>
      <div className="hero__background">
        <img className="hero__background-image" src={danser1} alt="danser" />
        <img
          className="hero__background-image"
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
