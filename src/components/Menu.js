import React from "react";
import logo from "../images/logo.png";
import sprite from "../images/sprite/sprite.svg";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher"

const Menu = ({ onCloseMenu }) => {
  return (
    <div id="menu" className="menu">
      <div className="menu__header">
        <img src={logo} alt="logo" className="menu__logo" />
        <button
          type="button"
          className="menu__button"
          onClick={onCloseMenu}
        >
          <svg className="menu__svg">
            <use href={`${sprite}#close`}></use>
          </svg>
        </button>
      </div>
      <div className="nav-container">
        <nav className="social">
          <ul className="social__list">
            <li className="social__item">
              <a
                className="social__link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="social__svg">
                  <use href={`${sprite}#instagram`}></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a
                className="social__link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="social__svg">
                  <use href={`${sprite}#facebook`}></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a
                className="social__link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="social__svg">
                  <use href={`${sprite}#tiktok`}></use>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <LanguageSwitcher />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <NavLink className="nav__list-link" to="/" onClick={onCloseMenu}>
                про нас
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink className="nav__list-link" to="" onClick={onCloseMenu}>
                хореографи
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink className="nav__list-link" to="" onClick={onCloseMenu}>
                команди
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink className="nav__list-link" to="" onClick={onCloseMenu}>
                розклад
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink className="nav__list-link" to="" onClick={onCloseMenu}>
                фото
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink className="nav__list-link" to="" onClick={onCloseMenu}>
                world of dance
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink className="nav__list-link" to="" onClick={onCloseMenu}>
                контакти
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
