import React from "react";
import { useState } from "react";
import "./Btemp1.css";
import image from "../../Templates/birthday6.jpg";

function Temp1() {
  const [name, setName] = useState("Dev Pratap");
  const [date, setDate] = useState("28-Aug-2023");
  const [location, setLocation] = useState("Party at N.K Restaurant, Lovely Professional University");


  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  return (
    // <body>
    <div className="Btemp1">
      <img src={image} alt="bdaytemp1" className="container" />
      {/* <div className="subContainer"> */}
        <div className="textContainer">
          <h1 id="bdayWish">
            Happy
            <br />
            Birthday
          </h1>
          <br />
          <div className="nameHolder">
            <textarea id="name" value={name} onChange={handleChangeName}></textarea>
          </div>
          {/* <input onChange={(e)=>setName(e.target.value)} onClick></input> */}
          <div className="dateHolder">
            <textarea id="date" value={date} onChange={handleChangeDate}></textarea>
            {/* <input type={'date'}></input> */}
          </div>
        </div>
      {/* </div> */}
      <footer>
        <textarea id="location" value={location} onChange={handleChangeLocation}>
        </textarea>
      </footer>
    </div>
    // </body>
  );
}

export default Temp1;
