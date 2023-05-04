import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Greeting from "./Greeting";
import LandingTemplateContainer from "./LandingTemplateContainer";
import "../Combined.css";
import Loader from "../Loader";
import { appContext } from "../AppContext";
import SearchedSubCategory from "./SearchedSubCategory";
// import SearchedCategory from "./SearchedCategory";
// import CategoryTemplateContainer from "../CategoryPage/CategoryTemplateContainer";

// export const appContext = createContext(null);

function Home() {
  const [load, setLoad] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchedSubCategory, setSearchedSubCategory] = useState(null);

  const [headingData, setHeadingData] = useState();

  // console.log(appContext.)
  setTimeout(() => {
    setLoad(false);
  }, 2200);

  // Scroll feature
  const updateSelectedCategory = (category) => {
    setSelectedCategory(category);
    // console.log("Selected category:", selectedCategory);
  };

  // Search feature
  const updateSearchedSubCategory = (category) => {
    setSearchedSubCategory(category);
    // console.log("Selected category:", searchedSubCategory);
  };

  useEffect(() => {
    function fetchData() {
      fetch(process.env.REACT_APP_POST_TO_BACKEND_SERVER + "/editing/all")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setHeadingData(data);
        });
    }

    fetchData();
  }, []);

  return (
    <>
      {/* {console.log(headingData)} */}
      {load ? (
        <Loader />
      ) : (
        <appContext.Provider
          value={{
            selectedCategory,
            updateSelectedCategory,
            searchedSubCategory,
            updateSearchedSubCategory,
            headingData
          }}
        >
          <div className="home">
            <Navbar headingData={headingData} />
            <Greeting />
            <div>
              {/* {<CategoryTemplateContainer/>} */}
              <SearchedSubCategory />
            </div>
            <LandingTemplateContainer headingData={headingData} />
          </div>
        </appContext.Provider>
      )}
    </>
  );
}

export default Home;
