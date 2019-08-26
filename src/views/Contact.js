import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <Container id="containerContact">
                <Row>
                    <div id="contactWidhtMe">
                        <h1 className="pageTitle">CONTÁCTAME</h1>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div id="phoneNumber">
                            <h3 className="">
                                Número telefónico
                            </h3>    
                            <h5>
                                (+56) 9 54906238
                            </h5>
                        </div>
                        
                        <div id="email"> 
                            <h3 className="">
                                Correo electrónico
                            </h3>
                            <h5 className="">
                                stefanyguevarae@gmail.com
                            </h5>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="rrss">
                            <h3>
                                Redes sociales
                            </h3>
                        </div>  
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;