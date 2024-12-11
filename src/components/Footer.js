import React, { useEffect, useRef } from "react";
import logo from "../images/logo.png";
import shadow from "../images/danser1.png";
import translations from "../data/translations.json";
import SocialLinks from "../components/SocialLinks";
import { NavLink } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Footer = ({ language }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  var myIcon = L.icon({
    iconUrl: logo,
    iconSize: [16, 25],
    iconAnchor: [8, 5],
  });
  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map").setView(
        [50.45796495033796, 30.40239759619346],
        13
      );
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "",
      }).addTo(map);

      const marker = L.marker([50.45796495033796, 30.40239759619346], {
        icon: myIcon,
      }).addTo(map);

      marker.bindPopup(translations[language].footer.address).openPopup();

      markerRef.current = marker;
    } else if (markerRef.current) {
      markerRef.current
        .getPopup()
        .setContent(translations[language].footer.address)
        .update();
    }
  }, [language]);

  return (
    <>
      <section className="footer container">
        <div className="footer__nav">
          <NavLink to="/">
            <img src={logo} alt="logo" className="footer__logo" />
          </NavLink>
          <SocialLinks />
        </div>
        <address className="footer__address">
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
        </address>
        <div id="map" className="footer__map"></div>
      </section>
      <section className="footer__copyright">
        <p>© {new Date().getFullYear()} DS Group. All rights reserved. </p>
        <div className="footer__copyright-developers">
          <span>Design by</span>
          <a
            className="footer__copyright-link"
            href="https://www.behance.net/0cd92d87"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natalia Asieieva
          </a>
          <span> &amp; </span>
          <a
            className="footer__copyright-link"
            href="https://www.behance.net/LendielMari"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marianna Lendiel
          </a>
          <span>Developed by</span>
          <a
            className="footer__copyright-link"
            href="https://ipopovadev.website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iryna Popova
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
