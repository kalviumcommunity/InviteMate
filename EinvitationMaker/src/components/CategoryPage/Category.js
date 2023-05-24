import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";

import CategoryHeading from "./CategoryHeading";
import CategoryTemplateContainer from "./CategoryTemplateContainer";
import { useLocation, useNavigate } from "react-router-dom";
import headingData from "../CategoriesData";

function Category() {
  const navigate = useNavigate();
  const [single, setSingle] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [loader, setLoader] = useState(false);

  const { state } = useLocation();

  useEffect(() => {
    if (state === null) {
      navigate("/");
    } else {
      setSingle(
        headingData?.filter((singleData) => singleData.title === state.title)[0]
      );
    }
  }, []);

  setTimeout(() => {
    setLoader(false);
  }, 1200);

  return (
    <>
      {console.log(single)}

      <div className="CategoryContainer">
        <div className="nav">
          <Navbar />
        </div>
        <CategoryHeading
          setSelectedButton={setSelectedButton}
          selectedButton={selectedButton}
          single={single}
          setLoader={setLoader}
        />
        <CategoryTemplateContainer
          selectedButton={selectedButton}
          single={single}
          loader={loader}
        />
      </div>
    </>
  );
}

export default Category;
