import React from "react";
import { useState } from "react";
import "./Btemp1.css";
import imageBtemp1 from "../../Templates/birthday6.jpg";

function BTemp1() {
  const [nameBtemp1, setNameBtemp1] = useState("Dev Pratap");
  const [dateBtemp1, setDateBtemp1] = useState("28-Aug-2023");
  const [locationBtemp1, setLocationBtemp1] = useState("Party at N.K Restaurant, Lovely Professional University");


  const handleChangeName = (event) => {
    setNameBtemp1(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDateBtemp1(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocationBtemp1(event.target.value);
  };
  return (
    // <body>
    <div className="Btemp1">
      <img src={imageBtemp1} alt="bdaytemp1" className="container" />
      {/* <div className="subContainer"> */}
        <div className="textContainer">
          <h1 id="bdayWish">
            Happy
            <br />
            Birthday
          </h1>
          <br />
          <div className="nameHolder">
            <textarea id="name" value={nameBtemp1} onChange={handleChangeName}></textarea>
          </div>
          {/* <input onChange={(e)=>setName(e.target.value)} onClick></input> */}
          <div className="dateHolder">
            <textarea id="date" value={dateBtemp1} onChange={handleChangeDate}></textarea>
            {/* <input type={'date'}></input> */}
          </div>
        </div>
      {/* </div> */}
      <footer>
        <textarea id="location" value={locationBtemp1} onChange={handleChangeLocation}>
        </textarea>
      </footer>
    </div>
    // </body>
  );
}

export default BTemp1;
