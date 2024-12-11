import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const [galleryKey, setGalleryKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setGalleryKey((prevKey) => prevKey + 1);
  }, [location]);
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
      <PhotoGallery key={galleryKey} language={selectLanguage} />
      <WorldDancing language={selectLanguage} />
      <Feedback language={selectLanguage} />
      <Contacts language={selectLanguage} />
    </>
  );
};

export default Main;
