import React from 'react';
import { Container, Row, Card, CardGroup } from 'react-bootstrap';
import socialN from '../img/socialNetwork.jpg.png';
// import burgerQueen from '../img/burgerQueen.jpg.png';
// import mpLinks from '../img/md-Links';


function Proyects() {
    return (
        <>
            <Container>
                <Row>
                    <div>
                        <h1>Proyets</h1>
                    </div>

                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>MD-LINKS</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                    https://github.com/efyguevara/SCL009-md-links

                                    https://www.npmjs.com/package/sg-md-links
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                        <Card>
                            <Card.Img variant="top" src={socialN} />
                            <Card.Body>
                                <Card.Title>PET-LOVERS</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional content.{' '}
                                    This card has supporting text below as a natural lead-in to additional content.{' '}
                                    This card has supporting text below as a natural lead-in to additional content.{' '}
                                    
                                    https://github.com/efyguevara/SCL009-Social-Network

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>BURGER QUEEN</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.

                                https://github.com/efyguevara/SCL009-Burger-Queen

                                https://betanyeli.github.io/SCL009-Burger-Queen/   
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>


        </>
    );
}

export default Proyects;