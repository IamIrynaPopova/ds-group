import React, { useState, useEffect } from "react";
import translations from "../data/translations.json";
import gallery from "../data/gallery.json";
import logo from "../images/logo.png";

const PhotoGallery = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState("appearance");
  const [activeButton, setActiveButton] = useState("appearance");

  const filteredPhotos = gallery.filter(
    (photo) => photo.category === selectedCategory
  );

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };
  useEffect(() => {
    setSelectedCategory("appearance");
    setActiveButton("appearance");
  }, []);

  return (
    <section className="photogallery container" id="photogallery">
      <h2 className="photogallery__title">
        {translations[language].gallery.title}
      </h2>
      <div className="photogallery__button-box">
        <button
          type="button"
          className={`photogallery__button ${
            activeButton === "appearance" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("appearance")}
        >
          {translations[language].gallery.appearance}
        </button>
        <button
          type="button"
          className={`photogallery__button ${
            activeButton === "rest" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("rest")}
        >
          {translations[language].gallery.rest}
        </button>
        <button
          type="button"
          className={`photogallery__button ${
            activeButton === "studio" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("studio")}
        >
          {translations[language].gallery.studio}
        </button>
      </div>
      <ul className="photogallery__list">
        {filteredPhotos.map((photo, index) => (
          <React.Fragment key={index}>
            <li className="photogallery__item" key={index}>
              <div className="photogallery__image-wrapper">
                <img
                  className="photogallery__image"
                  src={photo.url}
                  alt={`photo ${index + 1}`}
                />
                <img
                  src={logo}
                  alt="logo"
                  className="photogallery__image-logo"
                />
              </div>
            </li>
            {index === 0 && (
              <div className="photogallery__description">
                <h3 className="photogallery__subtitle">
                  {translations[language].gallery.subtitle}
                </h3>
                <p className="photogallery__text">
                  {translations[language].gallery.text}
                </p>
              </div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default PhotoGallery;
