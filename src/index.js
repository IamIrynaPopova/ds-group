import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";
import App from "./components/App";
import css from "./styles/main.scss";

const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const images = importAll(
  require.context("./images", true, /\.(png|jpe?g|svg)$/)
);

export default images;

const root = ReactDOM.createRoot(document.getElementById("root"));
const basename = process.env.NODE_ENV === "production" ? "/ds-group" : "/";
root.render(
  <StrictMode>
    <HashRouter  basename={basename}>
      <App />
    </HashRouter>
  </StrictMode>
);
