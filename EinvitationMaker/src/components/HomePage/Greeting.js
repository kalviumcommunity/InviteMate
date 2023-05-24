import React, { useContext } from "react";
import Searchbar from "./Searchbar";
import searchicon from "../Templates/searchicon.png";
import { appContext } from "../AppContext";

function Greeting() {
  const { updateSearchedSubCategory } = useContext(appContext);

  const callback = (searchbarValue) => {
    const searchText = searchbarValue;
    return (
      <>
        <img
          src={searchicon}
          alt="searchButton"
          id="searchIcon"
          onClick={() => updateSearchedSubCategory(searchText)}
        ></img>
      </>
    );
  };

  return (
    <div className="greetingsContainer">
      <h1 id="greetingMessage">
        Celebrate in style with our e-invites.
        <br />
        The perfect way to spread the word!
      </h1>
      <div className="searchBarContainer">
        <Searchbar searchtext={callback} />
      </div>
    </div>
  );
}

export default Greeting;
