import React, { useContext } from "react";
import { appContext } from "../AppContext";
import "../Combined.css";

function NavLinks() {
  const { headingData, handleScroll } = useContext(appContext);
  return (
    <>
      <ul className="CategoryNameContainer">
        {headingData.map((category) => (
          <>
            <li
              key={category.id}
              className="categories"
              onClick={() => handleScroll(category.title)}
            >
              {category.title}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default NavLinks;
