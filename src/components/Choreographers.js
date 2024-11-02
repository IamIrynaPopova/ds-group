import React from "react";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";
import choreographer1 from "../images/choreographer1.jpg";
import choreographer2 from "../images/choreographer2.jpg";
import choreographer3 from "../images/choreographer3.jpg";
import choreographer4 from "../images/choreographer4.jpg";

const Choreographers = ({ language }) => {
  return (
    <section className="choreographers container">
      <h2 className="choreographers__title">
        {translations[language].choreographers.title}
      </h2>
      <p className="choreographers__text">
        {translations[language].choreographers.text}
      </p>
      <ul className="choreographers__list">
        <li className="choreographers__item">
          <img
            src={choreographer1}
            alt="choreographer"
            className="choreographers__image"
          ></img>
          <h3 className="choreographers__name">
            {translations[language].choreographers.choreographer1_name}
          </h3>
          <button className="choreographers__button">
            {translations[language].choreographers.button}
            <svg className="choreographers__svg">
              <use href={`${sprite}#arrow`}></use>
            </svg>
          </button>
        </li>
        <li className="choreographers__item">
          <img
            src={choreographer2}
            alt="choreographer"
            className="choreographers__image"
          ></img>
          <h3 className="choreographers__name">
            {translations[language].choreographers.choreographer1_name}
          </h3>
          <button className="choreographers__button">
            {translations[language].choreographers.button}
            <svg className="choreographers__svg">
              <use href={`${sprite}#arrow`}></use>
            </svg>
          </button>
        </li>
        <li className="choreographers__item">
          <img
            src={choreographer3}
            alt="choreographer"
            className="choreographers__image"
          ></img>
          <h3 className="choreographers__name">
            {translations[language].choreographers.choreographer1_name}
          </h3>
          <button className="choreographers__button">
            {translations[language].choreographers.button}
            <svg className="choreographers__svg">
              <use href={`${sprite}#arrow`}></use>
            </svg>
          </button>
        </li>
        <li className="choreographers__item">
          <img
            src={choreographer4}
            alt="choreographer"
            className="choreographers__image"
          ></img>
          <h3 className="choreographers__name">
            {translations[language].choreographers.choreographer1_name}
          </h3>
          <button className="choreographers__button">
            {translations[language].choreographers.button}{" "}
            <svg className="choreographers__svg">
              <use href={`${sprite}#arrow`}></use>
            </svg>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Choreographers;
