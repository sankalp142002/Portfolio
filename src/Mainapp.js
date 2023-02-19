import React from 'react'
import Landing from './Landing'
import "./Mainapp.css"
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact'
import Blog from './Blog'

function Mainapp() {
  return (
    <div className='mainapp'>
      <Landing />
      <About /> 
      <Skills />
      <Work />
      <Blog />
      <Contact />
    </div>
  )
}

export default Mainapp
