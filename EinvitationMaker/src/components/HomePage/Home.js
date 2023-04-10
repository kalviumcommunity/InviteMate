import React, { useState } from "react";
import Navbar from "../Navbar";
import Greeting from "./Greeting";
import LandingTemplateContainer from "./LandingTemplateContainer";
import "../Combined.css";
import Loader from "../Loader";
import { appContext } from "../AppContext";

// export const appContext = createContext(null);

function Home() {
  const [load, setLoad] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // console.log(appContext.)
  setTimeout(() => {
    setLoad(false);
  }, 2200);


  const updateSelectedCategory = (category) => {
    setSelectedCategory(category);
    // console.log("Selected category:", selectedCategory);
  };

  // console.log(chosenHeading);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <appContext.Provider
          value={{ selectedCategory, updateSelectedCategory }}
        >
          <div className="home">
            <Navbar />
            <Greeting />
            <LandingTemplateContainer />
          </div>
        </appContext.Provider>
      )}
    </>
  );
}

export default Home;
