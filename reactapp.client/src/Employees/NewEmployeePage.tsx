import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import ProvinceList from '../GroupSelect/provinceSelect';
import RoleList from '../GroupSelect/roleSelect';
import "./EmployeesList.css"

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
                <div className="formsNewEm mb-4">
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
                                    <RoleList/>
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
                                </Row>
                                <Col >
                                    <Form.Group>
                                        <Form.Label>Dodatkowe informacje</Form.Label>
                                            <Form.Control as="textarea" style={{width:"100%", height:"120px"}} />
                                    </Form.Group>
                                </Col>

                        </Tab>
                        <Tab eventKey="dodatek" title="Dane korespondencyjne" className="mb-5">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Kraj</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <ProvinceList/>
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
                </div>
            </Form>
        </Container>
    )
}