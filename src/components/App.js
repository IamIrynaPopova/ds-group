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
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      {showTitle && <Header onShowMenu={toggleMenu} animate={showTitle} />}
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
            element={<Main selectLanguage={language} animate={showTitle} />}
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
