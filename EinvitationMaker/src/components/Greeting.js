import React from "react";
import searchIcon from "../components/Templates/search.svg";

function Greeting() {

  return (
    <div className="greetingsContainer">
      <h1 id="greetingMessage" contentEditable>
        Celebrate in style with our e-invites.
        <br />
        The perfect way to spread the word!
      </h1>
      <div className="searchContainer">
        <input type={'text'} id='searchInput' placeholder='Search here..'></input>
        <img src={searchIcon} alt="searchButton" id="searchIcon"></img>
      </div>     
    </div>
  );
}

export default Greeting;

