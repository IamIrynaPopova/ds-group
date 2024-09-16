import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import App from "./components/App";
import css from "./styles/main.scss";

const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const imagesСhicСrew = importAll(
  require.context("./images/chic-crew", false, /\.(png|jpe?g|svg)$/)
);

export default imagesСhicСrew;

const root = ReactDOM.createRoot(document.getElementById("root"));
const basename = process.env.NODE_ENV === "production" ? "/ds-group" : "/";
root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
