import React from "react";
import logo from "../images/logo.png";
import sprite from "../images/sprite/sprite.svg";

const Header = ({ onShowMenu, showTitle }) => {
  return (
    <header className={`container header ${showTitle ? "animate" : ""}`}>
      <img src={logo} alt="logo" className="header__logo" />
      <button className="header__button" onClick={onShowMenu}>
        <svg className="header__svg">
          <use href={`${sprite}#menu`}></use>
        </svg>
      </button>
    </header>
  );
};

export default Header;
