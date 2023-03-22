import React from 'react'
import './Combined.css'
import logo from './Templates/InviteMate logo.png'
import headingData from './CategoriesData'
import { useNavigate } from 'react-router-dom'
import LoginButton from './LoginButton'
import EditPageSave from './EditPageSave'


// import {useNav}



export default function Navbar({handleDownload}) {


  const navigate = useNavigate()



  const redirect = () => {
    navigate('/')
  }


  return (
    <div className='navBar'>
        <div className='topNavBar'>
            <img src={logo} alt="logoImg" id='logo' onClick={() => redirect()}/>
            {window.location.pathname==="/editing"  ? <EditPageSave handleDownload={handleDownload}/> : <LoginButton/> }
        </div>
        <div className='bottomNavBar'>
            {headingData.map((category) => (
                <h2 key={category.id} className='categories'>{category.title}</h2>
            ))}
        </div>
    </div>
  )
}

