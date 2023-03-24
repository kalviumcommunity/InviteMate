import React, { useState } from "react";
import "./WedAnniv1.css";
import image from "../../Templates/WanniversaryTemp1.png";

function WedAnniv1() {

  const [headInvite,setHeadInvite] = useState('TOGEATHER WITH THEIR FAMILIES')
  const [nameOne,setNameOne] = useState('Olivia Rodriques')
  const [nameTwo,setNameTwo] = useState('Richard Jhonson')
  const [footInvite,setFootInvite] = useState('Invite you to celebrate their marrage')

  const handleChangeHeadInvite = (event) => {
    setHeadInvite(event.target.value)
  }

  const handleChangeNameOne = (event) => {
    setNameOne(event.target.value)
  }

  const handleChangeNameTwo = (event) => {
    setNameTwo(event.target.value)
  }

  const handleChangeFootInvite = (event) => {
    setFootInvite(event.target.value)
  }

  return (
    <div className="WedAnniv1">
      <img src={image} alt="WeddingTemp1" className="WedAnniv1Img" />
      <div class="WedAnniv1subContainer">
        <div className="WedAnniv1Whead">
          <textarea id="WedAnniv1headInvite" value={headInvite} onChange={handleChangeHeadInvite}>
          </textarea>
        </div>
        <div className="WedAnniv1Wbody">
          <h2 id="WedAnniv1nameOneInvite"  onChange={handleChangeNameOne} contentEditable>{nameOne}</h2>
          <textarea id="WedAnniv1nameTwoInvite" value={nameTwo} onChange={handleChangeNameTwo}></textarea>
        </div>
        <div className="Wfoot">
          <textarea id="WedAnniv1footInvite" value={footInvite} onChange={handleChangeFootInvite}>
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default WedAnniv1;

// <!-- export default WedAnniv1; -->

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <!-- <link rel="stylesheet" href="./WedAnniv1.css"> -->
// </head>
// <body>
//   <div>
//     <img src={../../Templates/WanniversaryTemp1.png} alt="WeddingTemp1" className='container'/>
//     <div class="subContainer">
//       <div className='Whead'>
//       <textarea id='headInvite'>TOGEATHER WITH THEIR FAMILIES</textarea>
//       </div>
//       <div className='Wbody'>
//       <textarea id='nameOneInvite'>Olivia Rodriques</textarea>
//       <textarea id='nameTwoInvite'>Richard Jhonson</textarea>
//       </div>
//       <div className='Wfoot'>
//       <textarea id='footInvite'>Invite you to celebrate their marrage</textarea>
//       </div>
//     </div>
//   </div>
// </body>
// </html>


