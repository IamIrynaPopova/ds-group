import React, { Link } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import sprite from "../images/sprite/sprite.svg";
import translations from "../data/translations.json";
import LanguageSwitcher from "../components/LanguageSwitcher";
import SocialLinks from "../components/SocialLinks";


const Menu = ({ onCloseMenu, languageChange, language }) => {
  return (
    <div id="menu" className="menu container">
      <div className="nav-container">
        <div className="social-wrapper">
          <SocialLinks />
        </div>
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
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#about_us");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                  onCloseMenu();
                }}
              >
                {translations[language].menu.about_us}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#choreographers"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#choreographers");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                  onCloseMenu();
                }}
              >
                {translations[language].menu.choreographers}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#teams"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#teams");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                  onCloseMenu();
                }}
              >
                {translations[language].menu.teams}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#time_table"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#time_table");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                  onCloseMenu();
                }}
              >
                {translations[language].menu.time_table}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#photogallery"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#photogallery");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                  onCloseMenu();
                }}
              >
                {translations[language].menu.photo}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#world_of_dance"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#world_of_dance");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                  onCloseMenu();
                }}
              >
                {translations[language].menu.world_of_dance}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                className="nav__list-link"
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#contacts");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                  onCloseMenu();
                }}
              >
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
