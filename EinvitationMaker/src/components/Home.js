import React from 'react'
import Navbar from './Navbar'
import Greeting from './Greeting'
import LandingTemplateContainer from './LandingTemplateContainer'
import './Combined.css'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Greeting/>
      <LandingTemplateContainer/>
    </div>
  )
}

export default Home
