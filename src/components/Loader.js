import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = () => {
  return (
    <div id="loader" className="loader hidden">
      <PulseLoader color="var(--main-color)" size="30px" />;
    </div>
  );
};

export default Loader;
