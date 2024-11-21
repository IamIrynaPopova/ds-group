import React from "react";
import translations from "../data/translations.json";
import ButtonMore from "./ButtonMore";
import worldOfDance from "../images/world_of_dance.jpg";

const WorldDancing = ({ language }) => {
  return (
    <section className="container worlddancing" id="world_of_dance">
      <h2 className="worlddancing__title">
        {translations[language].world_dancing.title}
      </h2>
      <div className="worlddancing__button"> 
        <ButtonMore path="/" language={language} />
      </div>
      <div className="worlddancing__image-wrapper">
        <img src={worldOfDance} alt="reward" className="worlddancing__image" />
        <div className="worlddancing__frame1"></div>
        <div className="worlddancing__frame2"></div>
      </div>
      <p className="worlddancing__text">
        {translations[language].world_dancing.text}
      </p>
    </section>
  );
};

export default WorldDancing;
