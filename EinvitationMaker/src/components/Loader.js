import React from "react";
import './Combined.css'
import { PropagateLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loaderContainer">
      <PropagateLoader
        color="#7f18ff"
        loading
        size={25}
        speedMultiplier={1.2}
      />
    </div>
  );
}

export default Loader;
