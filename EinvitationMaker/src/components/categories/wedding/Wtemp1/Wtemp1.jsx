import React, { useState } from "react";
import "./Wtemp1.css";
import image from "../../../Templates/Wedding6.png";

function Wtemp1() {

  const [headInvite,setHeadInvite] = useState('TOGEATHER WITH THEIR FAMILIES')
  const [name,setName] = useState('Olivia and Richard')
  const [footInvite,setFootInvite] = useState('Invite you to celebrate their marrage')

  const handleChangeHeadInvite = (event) => {
    setHeadInvite(event.target.value)
  }

  const handleChangeName = (event) => {
    setName(event.target.value)
  }


  const handleChangeFootInvite = (event) => {
    setFootInvite(event.target.value)
  }

  return (
    <div className="Wtemp1">
      <img src={image} alt="WeddingTemp1" className="container" />
      <div class="subContainer">
        <div className="Whead">
          <textarea id="headInvite" value={headInvite} onChange={handleChangeHeadInvite}></textarea>
        </div>
        <div className="Wbody">
          <textarea id="nameInvite" value={name} onChange={handleChangeName}></textarea>
        </div>
        <div className="Wfoot">
          <textarea id="footInvite" value={footInvite} onChange={handleChangeFootInvite}>
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default Wtemp1;
