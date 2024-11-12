import React, { lazy, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import teams from "../data/teams.json";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";
import ButtonReturn from "../components/ButtonReturn";
import Form from "../components/Form";
// const TeamGallery = lazy(() => import("../components/TeamGallery"));
import TeamGallery from "../components/TeamGallery";

const Team = ({ language, onCloseForm, onOpenForm }) => {
  const { teamId } = useParams();
  const team = teams.find((team) => team.teamId === teamId);
  if (!team) {
    return <p className="container">Team not found</p>;
  }
  const playVideo = () => {
    const overlay = document.getElementById("overlay");
    const iframe = document.getElementById("video");
    console.log(overlay);
    console.log(iframe);
    overlay.classList.add("hidden");
    iframe.style.display = "block";
  };

  return (
    <section className="team container">
      <ButtonReturn language={language} path={`/#${teamId}`} />
      <h2 className="team__name">{team[language].name}</h2>
      <button className="team__button" type="button" onClick={onOpenForm}>
        {translations[language].button.contact}
      </button>
      <Form
        language={language}
        title={`Хочу дізнатись про ${team[language].name}`}
        onCloseForm={onCloseForm}
      />
      <div className="team__image-wrapper">
        <img
          src={team[language].main_photo}
          alt="team"
          className="team__image"
        ></img>
        <div className="team__frame"></div>
      </div>
      <div className="team__description">
        <p className="team__text">Вікова група:{team[language].age}</p>
        <p className="team__text">Хореографи:</p>
        <p className="team__text"> {team[language].choreographers}</p>
      </div>
      <p className="team__text">{team[language].description}</p>
      {team && <TeamGallery photos={team[language].photos} />}
      <div className="video">
        <div
          id="overlay"
          className="video__overlay"
          onClick={playVideo}
          style={{ backgroundImage: `url(${team[language].photos[2]})` }}
        >
          <div className="video__button">
            <svg className="video__button-svg">
              <use href={`${sprite}#button-youtube`}></use>
            </svg>
          </div>
        </div>
        <iframe
          className="video__iframe"
          id="video"
          src={team[language].video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "none" }}
        ></iframe>
      </div>
    </section>
  );
};

export default Team;
