import React from "react";
import ButtonMore from "../components/ButtonMore";
import translations from "../data/translations.json";
import choreographer1 from "../images/choreographer1.jpg";
import choreographer2 from "../images/choreographer2.jpg";
import choreographer3 from "../images/choreographer3.jpg";
import choreographer4 from "../images/choreographer4.jpg";

const Choreographers = ({ language }) => {
  return (
    <section className="choreographers container" id="choreographers">
      <h2 className="choreographers__title">
        {translations[language].choreographers.title}
      </h2>
      <p className="choreographers__text">
        {translations[language].choreographers.text}
      </p>
      <ul className="choreographers__list">
        <li className="choreographers__item" id="anna_skopnenko">
          <img
            src={choreographer1}
            alt="choreographer"
            className="choreographers__image"
          ></img>
          <h3 className="choreographers__name">
            {translations[language].choreographers.choreographer1_name}
          </h3>
          <ButtonMore
            path="/choreographer/anna_skopnenko"
            language={language}
          />
        </li>
        <li className="choreographers__item" id="oleksandra_vakhliovska">
          <img
            src={choreographer2}
            alt="choreographer"
            className="choreographers__image"
          ></img>
          <h3 className="choreographers__name">
            {translations[language].choreographers.choreographer2_name}
          </h3>
          <ButtonMore
            path="/choreographer/oleksandra_vakhliovska"
            language={language}
          />
        </li>
        <li className="choreographers__item" id="anton_vakhliovskyi">
          <img
            src={choreographer3}
            alt="choreographer"
            className="choreographers__image"
          ></img>
          <h3 className="choreographers__name">
            {translations[language].choreographers.choreographer3_name}
          </h3>
          <ButtonMore
            path="/choreographer/anton_vakhliovskyi"
            language={language}
          />
        </li>
        <li className="choreographers__item" id="julia_tsyb">
          <img
            src={choreographer4}
            alt="choreographer"
            className="choreographers__image"
          ></img>
          <h3 className="choreographers__name">
            {translations[language].choreographers.choreographer4_name}
          </h3>
          <ButtonMore path="/choreographer/julia_tsyb" language={language} />
        </li>
      </ul>
    </section>
  );
};

export default Choreographers;
