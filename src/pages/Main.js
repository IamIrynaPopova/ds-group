import React, { lazy, useState, useEffect } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Preferences from "../components/Preferences";
import Choreographers from "../components/Choreographers";
import Teams from "../components/Teams";
import Timetable from "../components/Timetable";
import PhotoGallery from "../components/PhotoGallery";
import WorldDancing from "../components/WorldDancing";
import Feedback from "../components/Feedback";
import Contacts from "../components/Contacts";

const Main = ({ selectLanguage, onCloseForm, onOpenForm }) => {
  return (
    <>
      <Hero language={selectLanguage} />
      <AboutUs
        language={selectLanguage}
        closeForm={onCloseForm}
        openForm={onOpenForm}
      />
      <Preferences language={selectLanguage} />
      <Choreographers language={selectLanguage} />
      <Teams language={selectLanguage} />
      <Timetable language={selectLanguage} />
      <PhotoGallery language={selectLanguage} />
      <WorldDancing language={selectLanguage} />
      {/* <Feedback language={selectLanguage} /> */}
      <Contacts language={selectLanguage} />
    </>
  );
};

export default Main;
