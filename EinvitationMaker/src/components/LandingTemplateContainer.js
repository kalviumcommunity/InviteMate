import React from "react";
import headingData from "./CategoriesData";
import rightArrow from "./Templates/arrow-right.svg";
// import { Link, Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function TemplateContainer() {
  const navigate = useNavigate();

  console.log(headingData)
  const handleOnClickShowMore = (data) => {
    // console.log(data.id);

    navigate(`/${data.title}`, { state: { title: data.title,id: data.id } });   
    // const headingCategory = {title: `${data.title}`}
    // return headingCategory
  };

  const handleClick = (data) => {
    navigate('/editing', {state: {id: data.id, temp: data.template}})
  }
 
  return headingData.map((data, index) => {
    return (
      <div className="templatesContainer" key={index}>
        <div className="topTemplatesContainer">
          <h1 className="categoryHeadings">{data.title}</h1>

          <div
            className="showMore_Icon"
            onClick={() => handleOnClickShowMore(data)}
          >
            <h4>Show more</h4>
            <img src={rightArrow} alt="showMoreIcon" id="showMoreIcon"></img>
          </div>
        </div>
        <div className="bottomTemplatesContainer">
          <div className="boxesContainer">
            {data.subHeading.map((subData, index) => {
              // const jsxc = subData.template
              return (
                // <div className="TemplateContainer" key={index}>
                
                  <img
                    src={subData.template}
                    alt="template"
                    className="TemplateContainer"
                    key={index}
                    // id={data.id}
                    onClick={() => handleClick(subData)}
                    
                    // imgId={subData.id}
                  />
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
}

export default TemplateContainer;
