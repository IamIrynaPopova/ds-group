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
  const [language, setLanguage] = useState("ua");

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (lang) => {
    console.log(lang);
    setLanguage(lang);
  };

  return (
    <>
      <Header onShowMenu={toggleMenu} />
      {menuIsOpen && (
        <Menu
          onCloseMenu={toggleMenu}
          languageChange={handleLanguageChange}
          selectLanguage={language}
        />
      )}
      <main>
        {/* <Suspense fallback={<PageLoader />}> */}
        <Routes>
          <Route path="/" element={<Main />} />
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
