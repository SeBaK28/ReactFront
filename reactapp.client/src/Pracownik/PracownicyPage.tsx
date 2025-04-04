import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

export const Pracownicy = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtruj pracownikow</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group >
                                        <Form.Label>Szukaj po imie</Form.Label>
                                        <Form.Control type="text" />
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
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data do</Form.Label>
                                        <Form.Control type="date" />
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
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table>

                <thead>
                    <tr>
                        <th>Lp</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Email</th>
                        <th>Nr tel</th>
                        <th>Stanowisko</th>
                        <th>Ostatni Samochod (Id)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jan</td>
                        <td>Kowalski</td>
                        <td>kowal@example.com</td>
                        <td>123 123 123</td>
                        <td>Lakiernik</td>
                        <td>f3a9d8b7</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lech</td>
                        <td>Nowak</td>
                        <td>nowy@gmail.com</td>
                        <td>321 321 321</td>
                        <td>Elektryk</td>
                        <td>c2e6f1a4</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Miachal</td>
                        <td>Kwiatkowski</td>
                        <td>kwiatek@gmail.com</td>
                        <td>987 654 321</td>
                        <td>Kierownik warsztatu</td>
                        <td>c2e6f1a4</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Bartosz</td>
                        <td>Nowak</td>
                        <td>nowy2@example.com</td>
                        <td>123 456 789</td>
                        <td>Blacharz</td>
                        <td>9b7d5e3c</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}