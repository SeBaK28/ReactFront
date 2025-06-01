import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PieCharts from './Charts/Piecharts';
import LineCharts from './Charts/Linecharts';
import { Link } from 'react-router-dom';

function App() {

    return (
        <Container fluid>
            <Row className="app-body">
                <Row className="app-body mt-3">
                    <Col className="my-3 col-9" style={{ height: "20rem" }}>                        
                            <Card >
                                <h3>Ilosc wykonanych zlecen w dniu:</h3>
                                <LineCharts />
                            </Card>                        
                    </Col>
                    <Col className="my-3 col-3" style={{ height: "20rem" }}>
                        <Link to="/messages">    
                    <Card className="card-message">
                            <Card.Header>Wiadomosci</Card.Header>
                            <Card.Body>
                                    <img src="./public/Image/telekonsultant.png" style={{ width: "120px", height: "120px", borderRadius: "30px" }} />
                                    <Card.Body>Masz 2 wiadomosci do odczytania</Card.Body>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                </Row>
                <hr/>
                <h3 className="m-3">Termin zlecenia</h3>
                <Col className="my-3">
                    <Card>
                        <Card.Header >Ogloszenie1</Card.Header>
                        <Card.Body >
                            <Card.Title>Toyota Yaris</Card.Title>
                            <Card.Body>Piotr Nowak</Card.Body>
                            <PieCharts/>
                            <Button variant="primary" className="mx-3">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>    
                <Col className="my-3">
                    <Card>
                        <Card.Header>Ogloszenie2</Card.Header>
                        <Card.Body>
                            <Card.Title>Audi A3</Card.Title>
                            <Card.Body>Lech Nowak</Card.Body>
                            <PieCharts />
                            <Button variant="primary" className="mx-3">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-3">
                    <Card>
                        <Card.Header>Ogloszenie3</Card.Header>
                        <Card.Body>
                            <Card.Title>Renault Clio</Card.Title>
                            <Card.Body>Jan Kowalski</Card.Body>
                            <PieCharts />
                            <Button variant="primary" className="mx-3">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-3">
                    <Card>
                        <Card.Header>Ogloszenie4</Card.Header>
                        <Card.Body>
                            <Card.Title>Volkswagen Golf</Card.Title>
                            <Card.Body>Marek Nowak</Card.Body>
                            <PieCharts />
                            <Button variant="primary" className="mx-3" >Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Row className="app-body mt-3">
                <h3>Nadchodzace zlecenia</h3>
                <Col className="my-3">
                    <Card>
                        <Card.Img variant="top" src="public/image/BrokenCar.jpg" className="carImage"/>
                        <Card.Body>
                            <Card.Title>Aktualnosc 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" className="m-3">Przyjmij zlecenie</Button>
                            <Button variant="secondary" className="m-3">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-3">
                    <Card>
                        <Card.Img variant="top" src="public/image/BrokenCar.jpg" className="carImage" />
                        <Card.Body>
                            <Card.Title>Aktualnosc 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" className="m-3">Przyjmij zlecenie</Button>
                            <Button variant="secondary" className="m-3">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container>
    )
}

export default App;



