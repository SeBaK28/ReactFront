import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import ProvinceList from '../GroupSelect/provinceSelect';
import "./ClientList.css"

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
                <div className="formsNewCl mb-4">
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
                                    <Form.Group className="mb-2">Numer telefonu</Form.Group>
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
                                    <ProvinceList/>
                                </Col>
                            </Row>
                            <Row className = "mx-0">
                                <Form.Group>Dodatkowe Informacje</Form.Group>
                                    <Form.Control type="textarea" style={{height:"120px"}} />
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
                                        <Form.Group className="mb-2">Rodzaj Paliwa</Form.Group>
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
                                        <Form.Label>Termin wizyty</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Opis Problemu</Form.Label>
                                        <Form.Control type="textarea" style={{ height: "120px" }} />                                        
                                    </Form.Group>
                                </Col>
                        </Tab>
                    </Tabs>
                    </Row>
                </div>
            </Form>
        </Container>
    )
}