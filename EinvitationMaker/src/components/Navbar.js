import React,{ useContext } from "react";
import "./Combined.css";
import logo from "./Templates/InviteMate logo.png";
import headingData from "./CategoriesData";
import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";
import EditPageSave from "./EditPageSave";
import { appContext } from "./AppContext";
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// import {useNav}

export default function Navbar({ handleDownload }) {
  const navigate = useNavigate();
  // const context = useContext(appContext)
  // const reference = useRef(null);

  const { updateSelectedCategory } = useContext(appContext)

  const handleScroll = (data) => {
    // reference.scrollIntoView()
    // setChosenHeading(data)
    // console.log(data)
    updateSelectedCategory(data)
    // context.setSelectedCategory(data)

  }

  return (
    <div className="navBar">
      <div className="topNavBar">
        <img src={logo} alt="logoImg" id="logo" onClick={() => navigate('../')} />
        {window.location.pathname === "/editing" ? (
          <EditPageSave handleDownload={handleDownload} />
        ) : (
          <LoginButton />
        )}
      </div>
      <div className="bottomNavBar">
        {headingData.map((category) => (
          // <Link to={`/${category.title}`} >
          <h2 key={category.id} className="categories" onClick={() => handleScroll(category.title)}>
            {category.title}
          </h2>
          
          // { </Link> }
        ))}
        {/* <h1 style={{"color":"black"}}>selectedCategory: {selectedCategory}</h1> */}
       
      </div>
    </div>
  );
}


