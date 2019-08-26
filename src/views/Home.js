import React from 'react';
import { Row, Col } from 'react-bootstrap';
import home from '../img/bg2.jpg';

function Home() {
    return (
        <>
            <Container-fluid>
                <Row>
                    <Col xs={12} md={12} lg={6} xl={6} className="p-0 m-0">
                        <div>
                            <img src={home} className="imgbg" alt="escritorio con laptop, imagen decorativa" />
                        
                                {/* <h1 className="pageTitle">
                                    Front End Developer
                                </h1>
                                <h3 className="pageTitle">
                                    kdeowjfiew ijfouh u hduehwu ueiyc ir buie bfui rhiwuh   ucebi ubiw
                                </h3>  */}
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6} xl={6} id="div2Home">
                        <div className="alignMiddle">
                            <h1 className="pageTitle">
                                Stefany Guevara
                            </h1>
                            <h3 className="">
                                Front End Developer...
                            </h3> 
                        </div>
                    </Col>
                </Row>
            </Container-fluid>
        </>
    );
}

export default Home;