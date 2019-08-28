import React from 'react';
import { Container, Row, Card, CardDeck } from 'react-bootstrap';

import socialN from '../img/socialNetwork.jpg.png';
import burger from '../img/burgerqueen.png';
import markdown from '../img/markdown.png';
import internet from '../img/internet.svg';
import github from '../img/github.svg'; 


function Projects() {
    return (
        <>
            <Container>
              <Row>
                <div>
                    <h1 className="pageTitle">Projets</h1>
                </div>
                  <CardDeck>
                    <Card>
                      <Card.Body>
                      <div id="imgMd" variant="top"  className="imgBg"> 
                        <div>
                          <h2>MD-LINKS</h2>
                          
                          <p>
                            Libreria de Npm 
                          </p>  
                        </div>  
                      
                      </div>
                      </Card.Body>
                      <Card.Footer>
                        <a target='_blank' href="https://www.npmjs.com/package/sg-md-links"><img className="icon" src={internet} alt="icono de codigo" /></a>
                        <a target='_blank' href="https://github.com/efyguevara/SCL009-md-links"><img className="icon" src={github} alt="Logo github" /></a>
                      </Card.Footer>
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={socialN} className="imgCards" />
                      <Card.Body>
                        <Card.Title>PET LOVERS</Card.Title>
                        <Card.Text>
                          <p>
                            Red social para amantes de  las mascotas
                          </p>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <a target='_blank' href=""><img className="icon" src={internet} alt="icono de codigo" /></a>
                        <a target='_blank' href="https://github.com/efyguevara/SCL009-Social-Network"><img className="icon" src={github} alt="Logo github" /></a>
                      </Card.Footer>
                    </Card>   

                    <Card>
                      <Card.Img variant="top" src={burger} className="imgCards" />
                      <Card.Body>
                        <Card.Title>BURGER QUEEN</Card.Title>
                        <Card.Text>
                         <p>
                          Simula tus pedidos en Burger Queen
                         </p>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <a target='_blank' href="https://www.npmjs.com/package/sg-md-links"><img className="icon" src={internet} alt="icono de codigo" /></a>
                        <a target='_blank' href="https://github.com/efyguevara/SCL009-Burger-Queen"><img className="icon" src={github} alt="Logo github" /></a>
                      </Card.Footer>
                    </Card>
                  </CardDeck>
                </Row>
            </Container>


        </>
    );
}

export default Projects;