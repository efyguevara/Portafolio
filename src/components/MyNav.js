import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


function MyNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Navbar.Brand href="/home"><span className="colorOne name">SG</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Home"><span className="navLinks">Home</span></Nav.Link>
            <Nav.Link as={Link} to="/Projects"><span className="navLinks">Projects</span></Nav.Link>
            <Nav.Link as={Link} to="/About"><span className="navLinks">About</span></Nav.Link>
            {/* <Nav.Link as={Link} to="/Skills"><span className="navLinks">Skills</span></Nav.Link> */}
            <Nav.Link as={Link} to="/Contact"><span className="navLinks">Contact</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNav;