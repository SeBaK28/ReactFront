import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 

export const Pracownik = () => {
    return (
        <Container fluid>
            <Form>
                <Row >
                    <Col>
                        <Button variant="primary" className="me-2">Dodaj</Button>
                        <Button variant="info" className="me-2">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Tabs
                        defaultActiveKey="danePodstawowe"
                        className="mb-3"
                    >
                        <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Imie</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data Urodzenia</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>PESEL</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Adres Zamieszkania</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nr Prawa Jazdy</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nr tel</Form.Label>
                                        <Form.Control type="text" placeholder="+48 123 456 789" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Forma zatrudnienia</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Umowa o prace</option>
                                            <option value="2">Umowa zlecenie</option>
                                            <option value="3">Umowa o dzielo</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Blacharz</option>
                                            <option value="2">Lakiernik</option>
                                            <option value="3">Mechanik</option>
                                            <option value="4">Elektryk samochodowy</option>
                                            <option value="5">Diagnosta</option>
                                            <option value="6">Doradca serwisowy</option>
                                            <option value="7">Kierownik warsztatu</option>
                                            <option value="8">Pracownik recepcji</option>
                                            <option value="9">Specjalista ds. czesci zamiennych</option>
                                            <option value="10">Detailer samochodowy</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Imie ojca</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Imie matki</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nazwisko rodowe:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nazwisko rodowe matki:</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Netto</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Brutto</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-4">
                                    <Form.Group>
                                        <Form.Label>Nr Konta Bankowego</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-8">
                                    <Form.Group>
                                        <Form.Label>Dodatkowe informacje</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="dodatek" title="Dane korespondencyjne">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Kraj</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
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
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Powiat</Form.Label>
                                        <Form.Control type ="text"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Kod gminy</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Check type="radio" label="Miasto" />
                                </Col>
                                <Col>
                                    <Form.Check type="radio" label="Wies" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Ulica</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group>
                                        <Form.Label>Nr domu</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Form.Group >
                                        <Form.Label>Nr mieszkania</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Miejscowosc</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col className="col-3">
                                    <Form.Group>
                                        <Form.Label>Kod pocztowy</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Gmina</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Poczta</Form.Label>
                                        <Form.Control type="text" />
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