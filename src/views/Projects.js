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
            <h1 className="pageTitle margintop">PROJECTS</h1>
          </div>
        </Row>

        <Row>

          <CardDeck>
            <Card className="card">
              <Card.Img variant="top" src={Markdown} className="imgMd" />
              <Card.Body className="bgcard">
                <Card.Title>MD-LINKS</Card.Title>
                <Card.Text>
                  Librería npm, analizador de url's, lector de archivos markdown.
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

              <Card.Img variant="top" src="https://camo.githubusercontent.com/1f86185267681b0511bba9f0369bb2e1e7eda761/68747470733a2f2f692e696d6775722e636f6d2f46554c6f784f6a2e706e67" className="imgSN" />

              <Card.Body className="bgcard">
                <Card.Title>POPCORN FAMILY</Card.Title>
                <Card.Text>
                  PopCorn Family, aplicación familiar donde se puede visualizar la  reseña de películas según ranking, año de lanzamiento o género.
                </Card.Text>



              </Card.Body>
              <Card.Footer>
                <Card.Link rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-hackathon-peliculas"><img className="icon" src={github} alt="Logo github" />
                </Card.Link>

                <Card.Link rel="noopener noreferrer" target='_blank' href="https://efyguevara.github.io/SCL009-hackathon-peliculas/src/index.html"><img className="icon" src={internet} alt="icono de codigo" />
                </Card.Link>

              </Card.Footer>
            </Card>

            <Card className="">

              <Card.Img variant="top" src="https://github.com/efyguevara/SCL009-data-lovers/raw/master/src/img/pokemon_ash.png" className="imgSN" />
              <Card.Body className="bgcard">
                <Card.Title>POKEMON GO!</Card.Title>
                <Card.Text>
                  Aplicación web para personas que se están iniciando en Pokemon Go. Te permite visualizar la información de cada pokemon.
                </Card.Text>
              </Card.Body>

              <Card.Footer>

                <Card.Link rel="noopener noreferrer" target='_blank' href="https://github.com/efyguevara/SCL009-data-lovers">
                  <img className="icon" src={github} alt="Logo github" />
                  <Card.Link rel="noopener noreferrer" target='_blank' href="https://efyguevara.github.io/SCL009-data-lovers/src/">
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