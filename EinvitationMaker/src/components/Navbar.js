import React from 'react'
import './Combined.css'
import logo from './Templates/InviteMate logo.png'
import headingData from './CategoriesData'



export default function navbar() {
  return (
    <div className='navBar'>
        <div className='topNavBar'>
            <img src={logo} alt="logoImg" id='logo'/>
            <button id='loginButton' >Login</button>
        </div>
        <div className='bottomNavBar'>
            {headingData.map((category) => (
                <h2 key={category.id} className='categories'>{category.title}</h2>
            ))}
        </div>
    </div>
  )
}
