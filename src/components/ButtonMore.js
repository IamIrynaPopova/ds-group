import React from "react";
import { NavLink } from "react-router-dom";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";

const ButtonMore = ({ language, path }) => {
  return (
    <NavLink to={path} className="button__more" aria-label={translations[language].button.more}>
      {translations[language].button.more}
      <svg className="button__more-svg">
        <use href={`${sprite}#arrow`}></use>
      </svg>
    </NavLink>
  );
};

export default ButtonMore;
