import React from 'react';
import { Container, Row, Card, CardDeck } from 'react-bootstrap';
import Markdown from '../img/markdown.png'
import socialN from '../img/socialNetwork.jpg.png';
import burger from '../img/burgerqueen.png';
import internet from '../img/internet.svg';
import github from '../img/github.svg';


function Projects() {
  return (
    <>

      <Container id="containerProjects">
        <Row>
          <div>
            <h1 className="pageTitle">Projects</h1>
          </div>
        </Row>

        <Row>

          <CardDeck>
            <Card className="card">
              <Card.Title>MD-LINKS</Card.Title>
              <Card.Img variant="top" src={Markdown} className="imgMd" />
              <Card.Body className="bgcard">
                <Card.Text>
                  Libreria Npm.
              </Card.Text>
              </Card.Body>
              <Card.Footer>

                <Card.Link rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-md-links" >
                  <img className="icon" src={github} alt="Logo github" />
                </Card.Link>

                <Card.Link href="https://www.npmjs.com/package/sg-md-links" rel="noopener noreferrer" target='_blank'>
                  <img className="icon" src={internet} alt="icono de codigo" />
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card className="">
              <Card.Title>PET LOVERS</Card.Title>
              <Card.Img variant="top" src={socialN} className="imgSN" />

              <Card.Body className="bgcard">
                <Card.Text>
                  Red social para amantes de  las mascotas
                </Card.Text>



              </Card.Body>
              <Card.Footer>
                <Card.Link rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-Social-Network"><img className="icon" src={github} alt="Logo github" />
                </Card.Link>

                <Card.Link rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-Social-Network"><img className="icon" src={internet} alt="icono de codigo" />
                </Card.Link>

              </Card.Footer>
            </Card>

            <Card className="">
              <Card.Title>BURGER QUEEN</Card.Title>
              <Card.Img variant="top" src={burger} className="imgBQ" />
              <Card.Body className="bgcard">
                <Card.Text>
                  Haz tus pedidos de comida rapida en Burger Queen.
                </Card.Text>
              </Card.Body>

              <Card.Footer>

                <Card.Link rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-Burger-Queen">
                  <img className="icon" src={github} alt="Logo github" />
                  <Card.Link rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-Burger-Queen">
                    <img className="icon" src={internet} alt="icono de codigo" />
                  </Card.Link>

                </Card.Link>
              </Card.Footer>
            </Card>
          </CardDeck>


          {/* <Card>
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
            <a rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-Social-Network"><img className="icon" src={internet} alt="icono de codigo" /></a>
            <a rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-Social-Network"><img className="icon" src={github} alt="Logo github" /></a>
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
            <a rel="noopener noreferrer" target='_blank' href="https://www.npmjs.com/package/sg-md-links"><img className="icon" src={internet} alt="icono de codigo" /></a>
            <a rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-Burger-Queen"><img className="icon" src={github} alt="Logo github" /></a>
          </Card.Footer>
        </Card> */}

        </Row>
      </Container>


    </>
  );
}

export default Projects;