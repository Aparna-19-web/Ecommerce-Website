import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'
import Common from './Common'
function About() {
  return (
    <div>
   <Navbar/>
    <Common  name=" Welcome to About Page " imgsrc="https://i.pinimg.com/originals/cf/94/7b/cf947b46283c10c47e3d5d945afb7053.gif" visit="./Contact" btname="Contact Us"/>
    
    </div>
  )
}

export default About