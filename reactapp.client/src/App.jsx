import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

function App() {
    return (
        <Container fluid>
            <div className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <hr />
            <Row>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie1</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Visit</Button>
                        </Card.Body>
                    </Card>
                </Col>    
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie2</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Visit</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie3</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Visit</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie4</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Visit</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="public/image/pepsi.png" />
                        <Card.Body>
                            <Card.Title>Aktualnosc 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/image/2.png" className="cardImage"/>
                        <Card.Body>
                            <Card.Title>Aktualnosc 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col> 
            </Row>
            
        </Container>
    )
}

export default App;