import React from "react";
import { HashLink } from "react-router-hash-link";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";

const ButtonReturn = ({ language, path }) => {
  return (
    <HashLink className="button__return" to={path}>
      <svg className="button__return-svg">
        <use href={`${sprite}#arrow-left`}></use>
      </svg>
      {translations[language].button.return}
    </HashLink>
  );
};

export default ButtonReturn;
