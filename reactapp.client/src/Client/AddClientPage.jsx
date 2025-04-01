import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 

export const Client = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Dodaj</Button>
                        <Button variant="info" className="me-2">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Tabs
                        defaultActiveKey="userData"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="userData" title="Wlasciciel">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Imie</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data Urodzenia</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Numer Pesel/NIP (dla firm)</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data Urodzenia</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="emai" placeholder="name@example.com" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>Numer telefonu</Form.Group>
                                    <Form.Control type="tel"/>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="address" title="Address">
                            <Row>
                                <Col>
                                    <Form.Group>Ulica</Form.Group>
                                    <Form.Control type="text"/>
                                </Col>
                                <Col>
                                    <Form.Group>Nr Domu</Form.Group>
                                    <Form.Control type="number"/>
                                </Col>
                                <Col>
                                    <Form.Group>Nr Mieszkania</Form.Group>
                                    <Form.Control type="number" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>Kod Pocztowy</Form.Group>
                                    <Form.Control type="text" />
                                </Col>
                                <Col>
                                    <Form.Group>Miasto</Form.Group>
                                    <Form.Control type="text" />
                                </Col>
                                <Col>
                                    <Form.Group>Wojewodztwo</Form.Group>
                                    <Form.Select>
                                        <option>Wybierz</option>
                                        <option value="1">Dolnoslaskie</option>
                                        <option value="2">Kujawsko-Pomorskie</option>
                                        <option value="3">Lubelskie</option>
                                        <option value="4">Lubuskie</option>
                                        <option value="5">Lodzkie</option>
                                        <option value="6">Malopolskie</option>
                                        <option value="7">Mazowieckie</option>
                                        <option value="8">Opolskie</option>
                                        <option value="9">Podkarpackie</option>
                                        <option value="10">Podlaskie</option>
                                        <option value="11">Pomorskie</option>
                                        <option value="12">Slaskie</option>
                                        <option value="13">Swietokrzyskie</option>
                                        <option value="14">Warminsko-Mazurskie</option>
                                        <option value="15">Wielkopolskie</option>
                                        <option value="16">Zachodniopomorskie</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row className = "mx-0">
                                <Form.Group>Dodatkowe Informacje</Form.Group>
                                <Form.Control type ="textarea"/>
                            </Row>
                        </Tab>
                        <Tab eventKey="samochod" title="Samochod">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Marka</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Model</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Numer rejestracyjny</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Numer VIN</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Row>
                                    <Col>
                                        <Form.Group>Rodzaj Paliwa</Form.Group>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Benzyna</option>
                                            <option value="2">Diesel</option>
                                            <option value="3">Elektryczny</option>
                                            <option value="4">Hybrydowy</option>
                                            <option value="5">LPG</option>
                                            <option value="6">CNG</option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Przebieg</Form.Label>
                                            <Form.Control type="number" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Row>
                        </Tab>
                        <Tab eventKey="usluga" title="Usluga">
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Typ uslugi</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Opis Problemu</Form.Label>
                                        <Form.Control type="textarea" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Termin wizyty</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
        </Container>
    )
}