import React from "react";
import { NavLink } from "react-router-dom";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";

const ButtonReturn = ({ language }) => {
  return (
    <NavLink className="button__return" type="button" to="/">
      <svg className="button__return-svg">
        <use href={`${sprite}#arrow-left`}></use>
      </svg>
      {translations[language].button_return.button}
    </NavLink>
  );
};

export default ButtonReturn;
