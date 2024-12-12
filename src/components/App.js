import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./ScrollToTop";
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
    form.classList.add("hidden");
  };

  const openForm = () => {
    const form = document.getElementById("form");
    setFormIsOpen(true);
    form.classList.remove("hidden");
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
        <ScrollToTop />
        {/* <Suspense fallback={<PageLoader />}> */}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                selectLanguage={language}
                onCloseForm={closeForm}
                onOpenForm={openForm}
              />
            }
          />
          <Route
            path="/teams/:teamId"
            element={
              <Team
                language={language}
                onCloseForm={closeForm}
                onOpenForm={openForm}
              />
            }
          />
          <Route
            path="/choreographer/:teacherId"
            element={<Teacher language={language} />}
          />
        </Routes>
        {/* </Suspense> */}
      </main>
      <Footer language={language} />
    </>
  );
};

export default App;
