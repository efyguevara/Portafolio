import React from 'react';
import { Container, Row } from 'react-bootstrap';

function About() {
    return (
        <>

            <Container>
                <div >
                    <Row>
                        <h1 className="pageTitle margintop colorOne">ABOUT ME</h1>
                    </Row>

                    <Row>
                        <div id="divAboutOne">
                            <p className="pAbout">
                                Amante de la naturaleza, y de los animales, pasear con mis perros es mi hobbie favorito, 
                                al igual que ir a la playa y a la montaña,  me relaja escuchar los sonidos de la naturaleza.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div id="divAboutTwo">
                            <p className="pAbout">
                                Administradora de profesión, pero con ambición de desarrollarme en el área Tech y ser parte 
                                activa del futuro tecnológico, fue así como llegue a Laboratoria, con ganas de darle un giro 
                                a mi vida y ser parte de proyectos que impacten de forma positiva y creativa los problemas 
                                complejos de la sociedad.
                            </p>
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default About;