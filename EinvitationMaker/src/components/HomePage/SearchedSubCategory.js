import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { appContext } from "../AppContext";
import "../Combined.css";

function SearchedSubCategory() {
  const navigate = useNavigate();
  const { searchedSubCategory, headingData, updateSearchedSubCategory } =
    useContext(appContext);

  const [loader, setLoader] = useState(true);
  const [show, setShow] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(null);

  const reEditSearchPage = (data) => {
    navigate("/editing", { state: { id: data.id } });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, [updateSearchedSubCategory]);

  useEffect(() => {
    headingData.map((data) => {
      return data.subHeading.filter((subdata) => {
        if (subdata.title === searchedSubCategory) {
          return setCurrentTemp(subdata);
        } else {
          setShow(false);
        }
      });
    });
    if (currentTemp !== null) {
      setShow(true);
    }
  }, [
    currentTemp,
    searchedSubCategory,
    headingData,
    updateSearchedSubCategory,
  ]);

  return (
    <>
      <div className="searchedCategoryContainer">
        {show ? (
          <div className="categoryTemplatesContainer">
            <div className="insideCategoryTemplatesContainer">
              {loader ? (
                <Loader />
              ) : (
                <>
                  {currentTemp?.eachTemplates?.map((temp) => (
                    <img
                      src={temp.temp}
                      alt="tempImg"
                      className="tempImg"
                      onClick={() => reEditSearchPage(temp)}
                      key={temp.id}
                    ></img>
                  ))}
                </>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default SearchedSubCategory;
