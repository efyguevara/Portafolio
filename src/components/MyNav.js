import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


function MyNav() {
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home"><span className="colorOne name">STEFANY GUEVARA</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link><Link to="/Home"><span className="navLinks">Home</span></Link></Nav.Link>
            <Nav.Link><Link to="/Proyects"><span className="navLinks">Proyects</span></Link></Nav.Link>
            <Nav.Link><Link to="/About"><span className="navLinks">About</span></Link></Nav.Link>
            <Nav.Link><Link to="/Skills"><span className="navLinks">Skills</span></Link></Nav.Link>
            <Nav.Link><Link to="/Contact"><span className="navLinks">Contact</span></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
}

export default MyNav;