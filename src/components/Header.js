import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import sprite from "../images/sprite/sprite.svg";

const Header = ({ onShowMenu }) => {
  return (
    <header className="header container">
      <NavLink to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </NavLink>
      <button className="header__button" onClick={onShowMenu}>
        <svg className="header__svg">
          <use href={`${sprite}#menu`}></use>
        </svg>
      </button>
    </header>
  );
};

export default Header;
