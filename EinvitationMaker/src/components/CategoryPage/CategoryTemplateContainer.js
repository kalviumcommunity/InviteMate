import React, { useContext, useEffect, useState } from "react";
// import headingData from './CategoriesData'
import "../Combined.css";
// import btemp1 from "../Templates/btemp1SS.png";
// import wtemp1 from "../Templates/Wed1SS.png";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { appContext } from "../AppContext";

function CategoryTemplateContainer({ selectedButton, single, loader }) {
  const [currentTemp, setCurrentTemp] = useState([]);

  const navigate = useNavigate();
  const {searchedSubCategory} = useContext(appContext)
  // console.log(searchedSubCategory)

  const reEditPage = (data) => {
    navigate("/editing", { state: { id: data.id } });
    // console.log("id" + data.id);
  };

  // useEffect(() => {
  //   // console.log(currentTemp)
  // }, [currentTemp]);

  useEffect(() => {
    if (selectedButton !== null ) {
      setCurrentTemp(
        single?.subHeading?.filter(
          (subTitle) => subTitle.title === selectedButton
        )
      );
    } 
    // else if(searchedSubCategory !== null || searchedSubCategory!==""){
    //   setCurrentTemp(
    //     single?.subHeading?.filter((subTitle) => subTitle.title === searchedSubCategory)
    //   )
    // }
    else {
      setCurrentTemp(single?.subHeading);
    }
  }, [selectedButton, single]);

  // console.log(single)

  return (
    <>
      <div className="categoryTemplatesContainer">
        <div className="insideCategoryTemplatesContainer">
          {loader ? (
            <Loader />
          ) : (
            <>
              {currentTemp?.map((singleData) => {
                return singleData?.eachTemplates?.map((temp) => (
                  <img
                    src={temp.temp}
                    alt="tempImg"
                    className="tempImg"
                    onClick={() => reEditPage(temp)}
                    key={temp.id}
                  ></img>
                ));
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryTemplateContainer;
