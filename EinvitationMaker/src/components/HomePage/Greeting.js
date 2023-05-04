import React, { useContext } from "react";
// import searchIcon from "../../components/Templates/search.svg";
import Searchbar from "./Searchbar";
import searchicon from "../Templates/searchicon.png";
import { appContext } from "../AppContext";

function Greeting() {
  const { updateSearchedSubCategory } = useContext(appContext);

  const callback = (searchbarValue) => {
    const searchText = searchbarValue;
    // console.log(searchText)
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

  // console.log("selectedCategory :"+selectedCategory, "\n updateSelectedCategory :"+updateSelectedCategory, "\n setSelectedButton :"+setSelectedButton, "\n selectedButton : " +selectedButton, "\n single :" +single, "\n setLoader : "+setLoader)

  return (
    <div className="greetingsContainer">
      <h1 id="greetingMessage">
        Celebrate in style with our e-invites.
        <br />
        The perfect way to spread the word!
      </h1>
      <div className="searchBarContainer">
        {/* <input type={'text'} id='searchInput' placeholder='Search here..'></input> */}
        <Searchbar searchtext={callback} />
        {/* <img src={searchicon} alt="searchButton" id="searchIcon" onClick={updateSearchedSubCategory()}></img> */}
      </div>
    </div>
  );
}

export default Greeting;
