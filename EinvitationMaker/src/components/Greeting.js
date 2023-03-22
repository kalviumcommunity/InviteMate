import React from "react";
import searchIcon from "../components/Templates/search.svg";
// import dropdown from "../components/Templates/chevron-down.svg";

function Greeting() {
  return (
    <div className="greetingsContainer">
      <h1 id="greetingMessage">
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

        {/* <div class="container">
          <div class="search-bar">
            <div id="select">
              <p>All categories</p>
              <img src={dropdown} alt='dropDown'></img>
              <ul>
                <li class="options">All categories </li>
                <li class="options">Electronics</li>
                <li class="options">Furniture</li>
                <li class="options">Sports</li>
                <li class="options">Fashion</li>
              </ul>
            </div>
            I<input type="text" placeholder="Search In All Categories"></input>
          </div>
</div> */}