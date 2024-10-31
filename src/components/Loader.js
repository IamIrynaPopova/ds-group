import React from "react";
import logo from "../images/logo.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt="Loading..." className="loader__logo" />
    </div>
  );
};

export default Loader;
