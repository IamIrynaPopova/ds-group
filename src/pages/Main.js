import React, { lazy, useState, useEffect } from "react";
import Hero from "../components/Hero";
import Preferences from "../components/Preferences";
import Choreographers from "../components/Choreographers";
import Teams from "../components/Teams";
import Timetable from "../components/Timetable";
import PhotoGallery from "../components/PhotoGallery";
import WorldDancing from "../components/WorldDancing";
import Feedback from "../components/Feedback";
import Contacts from "../components/Contacts";

const Main = () => {
  return (
    <>
      <Hero />
      <Preferences />
      <Choreographers />
      <Teams />
      <Timetable />
      <PhotoGallery />
      <WorldDancing />
      <Feedback />
      <Contacts />
    </>
  );
};

export default Main;
