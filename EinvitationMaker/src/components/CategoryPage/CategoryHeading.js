import "../Combined.css";
import leftArrow from "../Templates/arrow-left.svg";
import { Link } from "react-router-dom";

function CategoryHeading({
  setSelectedButton,
  selectedButton,
  single,
  setLoader,
}) {
  return (
    <div className="categoryBar">
      .{console.log(single)}
      <div className="topCategoryBar">
        <Link to={"/"}>
          <img src={leftArrow} alt="backArrow" id="backImage"></img>
        </Link>
        <h1>{single.title}</h1>{" "}
        {selectedButton !== null && <h1>/{selectedButton}</h1>}
      </div>
      <div className="bottomCategoryBar">
        <div className="insideBottomCategoryBar">
          {single?.subHeading?.map((data, index) => {
            return (
              <h2
                id="subTitles"
                key={index}
                onClick={() => {
                  setSelectedButton(data.title);
                  setLoader(true);
                }}
              >
                {data.title}
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryHeading;
