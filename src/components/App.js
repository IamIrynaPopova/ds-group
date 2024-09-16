import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageLoader from "./PageLoader";
import Main from "../pages/Main";
import Team from "../pages/Team";
import Teacher from "../pages/Teacher";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/teams/:teamId" element={<Team />} />
            <Route path="/choreographers/:teacherId" element={<Teacher />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
