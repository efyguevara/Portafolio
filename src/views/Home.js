import React from 'react';
import { Row } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Container-fluid >
                <Row>
                    <div id="templateHome" className="imgbg centerContent">               
                        <div id="div2Home" className="typewriter">
                            <h1 id="press" className="pageTitle">
                                Stefany Guevara
                            </h1>
                            {/* </div> */}
                            {/* <div id="div2Home" className="typewriter"> */}
                            <h1 >
                                Front End Developer...
                            </h1> 
                            
                        </div>
                    </div>
                </Row>
            </Container-fluid>
        </>
    );
}

export default Home;