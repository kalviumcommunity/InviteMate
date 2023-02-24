import React from 'react'
import "./Wtemp1.css"
import image from "../../../Templates/Wedding6.png"

function Wtemp1() {
  return (
    <div>
      <img src={image} alt="WeddingTemp1" className='container'/>
      <div class="subContainer">
        <div className='Whead'>
        <textarea id='headInvite'>TOGEATHER WITH THEIR FAMILIES</textarea>
        </div>
        <div className='Wbody'>
        <textarea id='nameInvite'>Olivia and Richard</textarea>
        </div>
        <div className='Wfoot'>
        <textarea id='footInvite'>Invite you to celebrate their marrage</textarea>
        </div>
      </div>
    </div>
  )
}

export default Wtemp1
