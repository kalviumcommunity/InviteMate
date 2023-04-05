import React, { useState } from 'react'
import Navbar from '../Navbar'
import Greeting from './Greeting'
import LandingTemplateContainer from './LandingTemplateContainer'
import '../Combined.css'
import Loader from '../Loader'

function Home() {

  const [load,setLoad] = useState(true)


  setTimeout(() => {
    setLoad(false)
  },2200)
  return (
    <>
    {
      load ? <Loader/> : <div className='home'>
      <Navbar/>
      <Greeting/>
      <LandingTemplateContainer/>
    </div>
    }
    </>
    
  )
}

export default Home
