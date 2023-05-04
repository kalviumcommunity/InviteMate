import React, { useContext, useRef, useEffect } from "react";
// import headingData from "../CategoriesData";
import rightArrow from "../Templates/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import { appContext } from "../AppContext";

function TemplateContainer(headingData) {
  const navigate = useNavigate();
  const reference = useRef({});

  // const [headingData,setHeadingData] = useState()

  const { selectedCategory } = useContext(appContext);

  // console.log(selectedCategory)

  const handleOnClickShowMore = (data) => {
    navigate(`/${data.title}`, { state: { title: data.title, id: data.id } });
  };

  const handleClick = (data,outerdata) => {
    navigate("/editing", { state: { id: data.id, temp: data.template, title: data.title, data: data } });
  };

  useEffect(() => {
    const selectedRef = reference.current[selectedCategory];
    if (selectedRef) {
      const y = selectedRef.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ behavior: "smooth", top: y - 40 });
    }
  }, [selectedCategory]);

  // useEffect(() => {
  //   function fetchData() {
  //     fetch(process.env.REACT_APP_POST_TO_BACKEND_SERVER + "/editing/all")
  //       .then((res) => res.json())
  //       .then((data) => setHeadingData(data));
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
    {/* {console.log(headingData?)} */}

      {headingData?.headingData?.map((data, index) => {
        // console.log(data);
        return (
          <div className="templatesContainer" key={index}>
            <div className="topTemplatesContainer">
              <h1
                className="categoryHeadings"
                ref={(ref) => (reference.current[data.title] = ref)}
                // id={data.title === selectedCategory ? "selectedHeading" : "not"}
              >
                {/* {console.log(reference.current[data?.title])} */}
                {data.title}
              </h1>
              <div
                className="showMore_Icon"
                onClick={() => handleOnClickShowMore(data)}
              >
                <h4>Show more</h4>
                <img
                  src={rightArrow}
                  alt="showMoreIcon"
                  id="showMoreIcon"
                ></img>
              </div>
            </div>
            <div className="bottomTemplatesContainer">
              <div className="boxesContainer">
                {data.subHeading.map((subData, index) => { 
                  // console.log(subData)
                  return (
                    <>
                    <img
                      src={subData?.template}
                      alt="template"
                      className="TemplateContainer"
                      key={index}
                      onClick={() => {handleClick(subData)}}
                    />
                    {/* {console.log(data)} */}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TemplateContainer;
