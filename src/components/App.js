import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageLoader from "./PageLoader";
import Main from "../pages/Main";
import Team from "../pages/Team";
import Teacher from "../pages/Teacher";
import Menu from "./Menu";

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [language, setLanguage] = useState("ua");
    const form = document.getElementById("form");

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  const closeForm = () => {
    const form = document.getElementById("form");
     setFormIsOpen(false);
    form.classList.add("hidden")
  };
  
  const openForm = () => {
    const form = document.getElementById("form");
      setFormIsOpen(true);
    form.classList.remove("hidden")
};
  
  return (
    <>
      <Header onShowMenu={toggleMenu} />
      {menuIsOpen && (
        <Menu
          onCloseMenu={toggleMenu}
          languageChange={handleLanguageChange}
          language={language}
        />
      )}
      <main>
        {/* <Suspense fallback={<PageLoader />}> */}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                selectLanguage={language}
                onCloseForm={closeForm}
                onOpenForm ={openForm}
              />
            }
          />
          <Route path="/teams/:teamId" element={<Team />} />
          <Route path="/choreographers/:teacherId" element={<Teacher />} />
        </Routes>
        {/* </Suspense> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
