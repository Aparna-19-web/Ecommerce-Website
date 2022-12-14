import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Login from "./Login";

function Navbar() {
    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Ecommers</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div clasNamesName="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                            <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Service">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Product">Product</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to="/Login">Login</NavLink>
                                    </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Navbar