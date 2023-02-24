import React from 'react'
import './Combined.css'
import logo from './Templates/InviteMate logo.png'

const headingData = [
    // landingCategories = 
    {id:1,title:'Personal',subHeading: [
        {id:11,title:'Baby Showers',link:'#'},
        {id:12,title:'Graduation',link:'#'},
        {id:11,title:'Prom Night',link:'#'},
        {id:12,title:'Housewarmings',link:'#'},
        {id:12,title:'Retirement',link:'#'}
    ]},
    {id:2,title:'Professional',subHeading: [
        {id:11,title:'Business Conference',link:'#'},
        {id:12,title:'Exhibition',link:'#'},
        {id:11,title:'Webinar',link:'#'},
        {id:12,title:'Seminar',link:'#'},
        {id:12,title:'Product Launch',link:'#'}
    ]},
    {id:3,title:'Birthdays',subHeading: [
        {id:11,title:'Kids',link:'#'},
        {id:12,title:'Teenagers',link:'#'},
        {id:11,title:'Women',link:'#'},
        {id:12,title:'Men',link:'#'},
        {id:12,title:'Surprise Party',link:'#'}
    ]},
    {id:4,title:'Weddings',subHeading: [
        {id:11,title:'Engagement',link:'#'},
        {id:12,title:'Bachelor/Bachelorette',link:'#'},
        {id:11,title:'Wedding Ceremony',link:'#'},
        {id:12,title:'Anniversary',link:'#'},
        {id:12,title:'Reception',link:'#'}
    ]},
    {id:5,title:'Festivals',subHeading: [
        {id:11,title:'Diwali',link:'#'},
        {id:12,title:'Holi',link:'#'},
        {id:11,title:'Navratri',link:'#'},
        {id:12,title:'Cristmas',link:'#'},
        {id:12,title:'Ganesh Chaturthi',link:'#'}
    ]}
    // ];
]





export default function navbar() {
  return (
    <div className='navBar'>
        <div className='topNavBar'>
            <img src={logo} alt="hehw" id='logo'/>
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
