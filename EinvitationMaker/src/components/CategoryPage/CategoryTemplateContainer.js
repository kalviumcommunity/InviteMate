import React, {  useEffect, useState } from "react";
import "../Combined.css";

import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

function CategoryTemplateContainer({ selectedButton, single, loader }) {
  const [currentTemp, setCurrentTemp] = useState([]);

  const navigate = useNavigate();

  const reEditPage = (data) => {
    navigate("/editing", { state: { id: data.id } });
  };

  useEffect(() => {
    if (selectedButton !== null ) {
      setCurrentTemp(
        single?.subHeading?.filter(
          (subTitle) => subTitle.title === selectedButton
        )
      );
    } 
 
    else {
      setCurrentTemp(single?.subHeading);
    }
  }, [selectedButton, single]);


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
