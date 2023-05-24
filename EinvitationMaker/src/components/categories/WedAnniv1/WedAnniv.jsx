import React, { useState } from "react";
import "./WedAnniv1.css";
import imageWedAnniv1 from "../../Templates/WanniversaryTemp1.png";

function WedAnniv1() {

  const [headInviteWedAnniv1,setHeadInviteWedAnniv1] = useState('TOGEATHER WITH THEIR FAMILIES')
  const [nameOneWedAnniv1,setNameOneWedAnniv1] = useState('Olivia Rodriques')
  const [nameTwoWedAnniv1,setNameTwoWedAnniv1] = useState('Richard Jhonson')
  const [footInviteWedAnniv1,setFootInviteWedAnniv1] = useState('Invite you to celebrate their marrage')

  const handleChangeHeadInvite = (event) => {
    setHeadInviteWedAnniv1(event.target.value)
  }

  const handleChangeNameOne = (event) => {
    setNameOneWedAnniv1(event.target.value)
  }

  const handleChangeNameTwo = (event) => {
    setNameTwoWedAnniv1(event.target.value)
  }

  const handleChangeFootInvite = (event) => {
    setFootInviteWedAnniv1(event.target.value)
  }

  return (
    <div className="WedAnniv1">
      <img src={imageWedAnniv1} alt="WeddingTemp1" className="WedAnniv1Img" />
      <div class="WedAnniv1subContainer">
        <div className="WedAnniv1Whead">
          <h3 id="WedAnniv1headInvite" contentEditable value={headInviteWedAnniv1} onChange={handleChangeHeadInvite}>{headInviteWedAnniv1}
          </h3>
        </div>
        <div className="WedAnniv1Wbody">
          <h2 id="WedAnniv1nameOneInvite"  onChange={handleChangeNameOne} contentEditable>{nameOneWedAnniv1}</h2>
          <h2 id="WedAnniv1nameTwoInvite" value={nameTwoWedAnniv1} onChange={handleChangeNameTwo} contentEditable>{nameTwoWedAnniv1}</h2>
        </div>
        <div className="Wfoot">
          <h3 id="WedAnniv1footInvite" contentEditable value={footInviteWedAnniv1} onChange={handleChangeFootInvite}>{footInviteWedAnniv1}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WedAnniv1;

