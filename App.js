import React from 'react'
import {Link} from "react-router-dom";
import Navbar from './Navbar';

import Home from './Components/Home';
import './style.css'
function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Link to="/about"></Link> { " "}
    <Link to="/service"></Link> { " "}
    <Link to="/product"></Link>{ " "}
    <Link to="/contact"></Link> { " "}
    <Link to="/login"></Link> 
    
    
    
    </div>
  )
}

export default App
