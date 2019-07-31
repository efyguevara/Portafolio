import React from 'react';


function Navbar() {
    return (

        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#Home"><span className="colorOne">STEFANY GUEVARA</span></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#Home">Home</a>
                        <a className="nav-item nav-link active" href="#Proyects">Proyects</a>
                        <a className="nav-item nav-link active" href="#About">About</a>
                        <a className="nav-item nav-link active" href="#Skills">Skills</a>
                        <a className="nav-item nav-link active" href="#Contact">Contact</a>
                    </div>
                </div>
            </nav>

        </div>
        
    );

}

export default Navbar;