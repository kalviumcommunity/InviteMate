import React, { useState } from "react";
import "./Wtemp1.css";
import imageWtemp1 from "../../../Templates/Wedding6.png";

function Wtemp1() {

  const [headInviteWtemp1,setHeadInviteWtemp1] = useState('TOGEATHER WITH THEIR FAMILIES')
  const [nameWtemp1,setNameWtemp1] = useState('Olivia and Richard')
  const [footInviteWtemp1,setFootInviteWtemp1] = useState('Invite you to celebrate their marrage')

  const handleChangeHeadInvite = (event) => {
    setHeadInviteWtemp1(event.target.value)
  }

  const handleChangeName = (event) => {
    setNameWtemp1(event.target.value)
  }


  const handleChangeFootInvite = (event) => {
    setFootInviteWtemp1(event.target.value)
  }

  return (
    <div className="Wtemp1">
      <img src={imageWtemp1} alt="WeddingTemp1" className="container" />
      <div className="subContainer">
        <div className="Whead">
          <textarea id="headInvite" value={headInviteWtemp1} onChange={handleChangeHeadInvite}></textarea>
        </div>
        <div className="Wbody">
          <textarea id="nameInvite" value={nameWtemp1} onChange={handleChangeName}></textarea>
        </div>
        <div className="Wfoot">
          <textarea id="footInvite" value={footInviteWtemp1} onChange={handleChangeFootInvite}>
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default Wtemp1;
