import React from "react";
import human from "../assets/human.jpg"; 
import Teams from "./Teams";

const App = () => {
        return (
          <div>
            <h1>I am Hero. Hello</h1>
            <img src={human} alt="human" />
            <Teams/>
          </div>
        );
}

export default App;