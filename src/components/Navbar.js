import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={process.env.PUBLIC_URL + '/'} className="navbar-brand"><span className="colorOne">STEFANY GUEVARA</span></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to="/Home"><span className="nav-item nav-link active">Home</span></Link>
                    <Link to="/Proyects"><span className="nav-item nav-link active">Proyects</span></Link>
                    <Link to="/About"><span className="nav-item nav-link active">About</span></Link>
                    <Link to="/Skills"><span className="nav-item nav-link active">Skills</span></Link>
                    <Link to="/Contact"><span className="nav-item nav-link active">Contact</span></Link>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Navbar;