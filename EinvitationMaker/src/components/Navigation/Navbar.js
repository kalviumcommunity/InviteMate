import React, { useContext } from "react";
import "../Combined.css";
import logo from "../Templates/InviteMate logo.png";
import { useNavigate } from "react-router-dom";
import LoginButton from "../LoginButton";
import EditPageSave from "../EditPageSave";
import PCNav from "./PCNav";
import { appContext } from "../AppContext";
import MobileNav from "./MobileNav";

export default function Navbar({ handleDownload }) {
  const navigate = useNavigate();

  const { updateSelectedCategory, headingData } = useContext(appContext);

  const handleScroll = (data) => {
    updateSelectedCategory(data);
  };

  return (
    <div className="navBar">
      <div className="topNavBar">
        <img
          key={logo}
          src={logo}
          alt="logoImg"
          id="logo"
          onClick={() => navigate("../")}
        />
        {window.location.pathname === "/editing" ? (
          <EditPageSave handleDownload={handleDownload} />
        ) : (
          <LoginButton />
        )}
      </div>
      {window.location.pathname === "/" ? (
        <div className="bottomNavBar">
          <appContext.Provider
            value={{
              handleScroll,
              headingData,
            }}
          >
            <PCNav />
            <MobileNav />
          </appContext.Provider>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
