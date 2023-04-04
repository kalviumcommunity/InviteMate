// import React from 'react'
import back from './Templates/arrow-left.svg'
import './Combined.css'
import  {useNavigate}  from 'react-router-dom'

function Back() {

    const navigate = useNavigate()

  return (
    <div>
      <img src={back} alt='back' id='backImg' onClick={()=>navigate('../')}></img>
    </div>
  )
}

export default Back
