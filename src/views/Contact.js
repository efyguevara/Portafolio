import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedIn from '../img/linkedin-logo.svg';
import github from '../img/github-sign.svg';
// import gmail from '../img/google.svg'

function Contact() {
    return (
        <>
            <Container id="containerContact" className="centerContent">
                <Row className="centerContent">
                    <div id="contactWidhtMe" className="">
                        <h1 className="pageTitle centerContent margintop">CONTÁCTAME</h1>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div id="phoneNumber" className="centerContent">
                            <h3 className="colorOne mt-5">
                                Número telefónico
                            </h3>
                            <h5 className="">
                                (+56) 9 54906238
                            </h5>
                        </div>

                        <div id="email">
                            <h3 className="colorOne mt-5">
                                Correo electrónico
                            </h3>
                            <h5 className="">
                                stefanyguevarab@gmail.com
                            </h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="rrss">
                            <h3 className="colorOne mt-5">
                                Redes sociales
                            </h3>
                            <div>
                                <span className="">
                                    <a rel="noopener noreferrer" target='_blank' href="https://linkedin.com/in/stefany-guevara"><img id="linkedIn" className="icon" src={linkedIn} alt="logo  LinkedIn" /></a>
                                </span>
                                <span className="">
                                    <a rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara"><img id="github" className="icon" src={github} alt="Logo Github" /></a>
                                </span>
                                {/* <a rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara"><img id="gmail" className="icon" src={gmail} alt="Logo Gmail" /></a> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;