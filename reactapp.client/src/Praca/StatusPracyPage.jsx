import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 


export const StatusPrac = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Wprowadz dane pojazdu</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group >
                                        <Form.Label>Marka</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group >
                                        <Form.Label>Nr VIN</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group >
                                        <Form.Label>Nr rejestracyjny</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table>
                <thead>
                    <tr>
                        <th>Lp</th>
                        <th>Data</th>
                        <th>Osoba wykonujaca</th>
                        <th>Opis</th>
                        <th>Cena</th>
                        <th>Status</th>
                        <th>Szczegoly</th>
                    </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>03.03.2025</td>
                        <td>Jan Kowalski</td>
                        <td>Malowanie lewego nadkola</td>
                        <td>1200 PLN</td>
                        <td>Zakonczono</td>
                        <button>Szczegoly</button>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>12.12.2024</td>
                        <td>Lech Nowak</td>
                        <td>Brak pradu</td>
                        <td>3500 PLN</td>
                        <td>Zakonczono</td>
                        <button>Szczegoly</button>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>01.02.2023</td>
                        <td>Bartosz Nowak</td>
                        <td>Usuwanie wgniotek po gradzie</td>
                        <td>700 PLN</td>
                        <td>Zakonczono</td>
                        <button>Szczegoly</button>
                    </tr>
                </tbody>
            </Table>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Button type="submit" className="me-2">Nowe Zlecenie</Button>
                        <Button variant="reset" className="me-2">Anuluj</Button>
                    </Col>
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="noweZlecenie"
                        className="mb-3"
                    >
                        <Tab eventKey="noweZlecenie">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Osoba wykonujaca</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Opis skrocony</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Opis szczegolowy</Form.Label>
                                        <Form.Control type="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-3">
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Zdjecie</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-3">
                                    <Form.Group>
                                        <Form.Label>Data rozpoczecia</Form.Label>
                                        <Form.Control type="date"/>
                                    </Form.Group>
                                </Col>
                                <Col className="col-3">
                                    <Form.Group>
                                        <Form.Label>Data zakonczenia</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-3">
                                    <Form.Group>
                                        <Form.Label>Cena</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Lista czesci</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2">
                                    <Button type="submit" >Dodaj czesc</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Lp</th>
                                            <th>Nazwa</th>
                                            <th>Ilosc sztuk</th>
                                            <th>Cena</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Wahacz</td>
                                            <td>1</td>
                                            <td>600 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
        </Container>
    )
}