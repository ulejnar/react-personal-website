import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'


function NavBar() {
  
  return (
    <nav className="navbar navbar-expand-md" style= {{backgroundColor:"blue", borderBottom: "1px solid grey"}}>
      <NavLink to="/about" className="navbar-brand mb-0 h1 danger">Ulrika Lejnarova</NavLink>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <div className="navbar-nav">
            <NavLink to="/about" className="nav-item nav-link">ABOUT</NavLink>
          
            <NavLink to="/projects" className="nav-item nav-link">PROJECTS</NavLink>
         
            <NavLink to="/contact" className="nav-item nav-link">CONTACT</NavLink>
         </div> 
      </div>
    </nav>
  );
}

export default NavBar;