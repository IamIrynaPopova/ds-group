import React from "react";
import logo from "../images/logo.png";
import sprite from "../images/sprite/sprite.svg";
import translations from "../data/translations.json";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Menu = ({ onCloseMenu, languageChange, language }) => {
  return (
    <div id="menu" className="container menu">
      <div className="menu__header">
        <img src={logo} alt="logo" className="menu__logo" />
        <button type="button" className="menu__button" onClick={onCloseMenu}>
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
                href="https://www.instagram.com/dsgroup.kyiv?igsh=MXAwZ2liZXMwOXZpOA=="
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
                href="https://www.facebook.com/profile.php?id=100061422600837"
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
                href="https://www.tiktok.com/@dsgroup.kyiv?_t=8orQq0D0dq1&_r=1"
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
        <LanguageSwitcher
          onLanguageChange={languageChange}
          language={language}
        />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#about_us"
                onClick={onCloseMenu}
              >
                {translations[language].menu.about_us}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#choreographers"
                onClick={onCloseMenu}
              >
                {translations[language].menu.choreographers}
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#teams" onClick={onCloseMenu}>
                {translations[language].menu.teams}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#time_table"
                onClick={onCloseMenu}
              >
                {translations[language].menu.time_table}
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#" onClick={onCloseMenu}>
                {translations[language].menu.photo}
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#" onClick={onCloseMenu}>
                {translations[language].menu.world_of_dance}
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__list-link" href="#" onClick={onCloseMenu}>
                {translations[language].menu.contacts}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;