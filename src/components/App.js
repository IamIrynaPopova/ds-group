import React from "react";
import Team from "../pages/Team";
import Feedback from "./Feedback";

const App = () => {
  return (
    <div>
      <Team teamId="chic_crew" />
      <Feedback/>
    </div>
  );
};

export default App;
