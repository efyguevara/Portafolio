import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from 'react-bootstrap';


function Nav() {
    return (
        <>
       
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/home"><span className="colorOne">STEFANY GUEVARA</span>S</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/Proyects">Proyects</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="/Skills">Skills</Nav.Link>
                  {/* <Nav.Link eventKey={2} >
                    Dank memes
                  </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          
 
 
        {/* <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/Home" className="navbar-brand"><span className="colorOne">STEFANY GUEVARA</span></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/Home">Home</a>
                        <a className="nav-item nav-link active" href="/Proyects">Proyects</a>
                        <a className="nav-item nav-link active" href="/About">About</a>
                        <a className="nav-item nav-link active" href="/Skills">Skills</a>
                        <a className="nav-item nav-link active" href="/Contact">Contact</a>
                    </div>
                </div>
            </nav>
        </div> */}
        </>
    );
}

export default Nav;