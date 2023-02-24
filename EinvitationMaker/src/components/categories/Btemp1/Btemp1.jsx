import React from 'react'
import { useState } from 'react';
import "./Btemp1.css"
import image from "../../Templates/birthday6.jpg"


function Temp1() {

  const [name,setName] = useState("Dev Pratap");

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <body>
      <div>
          <img src={image} alt='bdaytemp1' class="container"/>
          <div class="subContainer">
              <div class="textContainer">
                  <h1>Happy<br/>Birthday</h1><br/>
                  <div className='nameHolder'>
                    <textarea type={Text} id='name' value={name} onChange={handleChange}></textarea>
                  </div>
                  {/* <input onChange={(e)=>setName(e.target.value)} onClick></input> */}
                  <div className='dateHolder'>
                    <textarea typeof='text' id='date'>28-Aug-2023</textarea>
                  </div>
              </div> 
          </div>
          <footer>
              <textarea id='location'>Party at N.K Restaurant, Lovely Professional University</textarea>
          </footer> 
      </div>
    </body>
  )
}

export default Temp1
