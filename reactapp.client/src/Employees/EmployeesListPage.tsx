import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import RoleList from '../GroupSelect/roleSelect';
import "./EmployeesList.css";

export const Pracownicy = () => {
    return (
        <Container fluid>
            <div className="tableList mb-4">
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
                                    <RoleList/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Zatrudniony od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Zatrudniony do</Form.Label>
                                        <Form.Control type="date" />
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
                        <tr>
                            <td>5</td>
                            <td>Anna</td>
                            <td>Nowak</td>
                            <td>anna.nowak@example.com</td>
                            <td>456 456 456</td>
                            <td>Ksiegowa</td>
                            <td>a1b2c3d4</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Piotr</td>
                            <td>Wisniewski</td>
                            <td>piotr.w@example.com</td>
                            <td>789 789 789</td>
                            <td>Magazynier</td>
                            <td>e5f6g7h8</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Magdalena</td>
                            <td>Wojcik</td>
                            <td>magda.w@example.com</td>
                            <td>321 654 987</td>
                            <td>Pracownik recepcji</td>
                            <td>z9x8c7v6</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Krzysztof</td>
                            <td>Krawczyk</td>
                            <td>krzysztof.k@example.com</td>
                            <td>111 222 333</td>
                            <td>Mechanik</td>
                            <td>t1r2e3w4</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Katarzyna</td>
                            <td>Zielinska</td>
                            <td>kasia.z@example.com</td>
                            <td>444 555 666</td>
                            <td>Specjalista HR</td>
                            <td>y6u7i8o9</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}