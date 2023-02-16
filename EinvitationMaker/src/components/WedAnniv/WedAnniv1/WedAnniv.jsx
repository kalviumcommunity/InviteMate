import React from 'react'
import "./WedAnniv1.css"
import image from "../../Templates/WanniversaryTemp1.png"

function WedAnniv1() {
  return (
    <div>
      <img src={image} alt="WeddingTemp1" className='container'/>
      <div class="subContainer">
        <div className='Whead'>
        <textarea id='headInvite'>TOGEATHER WITH THEIR FAMILIES</textarea>
        </div>
        <div className='Wbody'>
        <textarea id='nameOneInvite'>Olivia Rodriques</textarea>
        <textarea id='nameTwoInvite'>Richard Jhonson</textarea>
        </div>
        <div className='Wfoot'>
        <textarea id='footInvite'>Invite you to celebrate their marrage</textarea>
        </div>
      </div>
    </div>
  )
}

export default WedAnniv1;