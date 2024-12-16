import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import sprite from "../images/sprite/sprite.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import SocialLinks from "./SocialLinks";

const Header = ({ onShowMenu, menuIsOpen }) => {
  return (
    <header className="header container">
      <NavLink to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </NavLink>
      <div className="header__menu">
        <LanguageSwitcher />
        <SocialLinks />
        <button className="header__button" onClick={onShowMenu}>
          <svg className="header__svg">
            <use href={menuIsOpen ? `${sprite}#close` : `${sprite}#menu`}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
