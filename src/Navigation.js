// import React from 'react';
// import { NavLink } from "react-router-dom";
// import './Navbar.css'

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" className="mb-5" dark expand="md">
        <NavbarBrand href="/">Ulrika Lejnarova</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
// function NavBar() {
  
  
//   return (
//     <nav className="navbar navbar-dark bg-primary">
//       <NavLink to="/" className="navbar-brand mb-0 h1 danger">Ulrika Lejnarova</NavLink>
     
      
//         <div className="navbar-nav">
//           <NavLink to="/home" className="nav-item nav-link">HOME</NavLink>
//           <NavLink to="/about" className="nav-item nav-link">ABOUT</NavLink>
        
//           <NavLink to="/projects" className="nav-item nav-link">PROJECTS</NavLink>
        
//           <NavLink to="/contact" className="nav-item nav-link">CONTACT</NavLink>
//         </div> 
      
//     </nav>
    
//   );
// }

// export default NavBar;
{/* <nav className="navbar navbar-expand-md" style= {{backgroundColor:"blue"}}>
      <NavLink to="/" className="navbar-brand mb-0 h1 danger">Ulrika Lejnarova</NavLink>
      <button className="navbar-toggler" type = "button" data-toggle="collapse" data-target="#navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <div className="navbar-nav">
            <NavLink to="/home" className="nav-item nav-link">HOME</NavLink>
            <NavLink to="/about" className="nav-item nav-link">ABOUT</NavLink>
          
            <NavLink to="/projects" className="nav-item nav-link">PROJECTS</NavLink>
         
            <NavLink to="/contact" className="nav-item nav-link">CONTACT</NavLink>
         </div> 
      </div>
    </nav> */}