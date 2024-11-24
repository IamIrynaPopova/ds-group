import React from "react";
import logo from "../images/logo.png";
import translations from "../data/translations.json";
import SocialLinks from "../components/SocialLinks";
import { NavLink } from "react-router-dom";

const Footer = ({ language }) => {
  return (
    <section className="footer container">
      <div className="footer__nav">
        <NavLink to="/">
          <img src={logo} alt="logo" className="footer__logo" />
        </NavLink>
        <SocialLinks />
      </div>
      <ul className="footer__list">
        <li className="footer__item">
          <p className="footer__text">Ukraine, Kyiv,</p>
          <p className="footer__text">Beresteyskiy avenue 71/2</p>
        </li>
        <li className="footer__item">
          <p className="footer__text">Email-address</p>
          <p className="footer__text">dsgroupkyiv@gmail.com</p>
        </li>
        <li className="footer__item">
          <p className="footer__text">Phone number</p>
          <p className="footer__text">+38 (099) 522-56-58</p>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
