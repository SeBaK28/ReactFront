import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

export const ClientList = () => {
    return(
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group >
                                        <Form.Label>Szukaj po wlascicielu</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group >
                                        <Form.Label>Szukaj po marce</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
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
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>Wojewodztwo</Form.Group>
                                    <Form.Select>
                                        <option>Wybierz</option>
                                        <option value="1">Dolno�l�skie</option>
                                        <option value="2">Kujawsko-Pomorskie</option>
                                        <option value="3">Lubelskie</option>
                                        <option value="4">Lubuskie</option>
                                        <option value="5">��dzkie</option>
                                        <option value="6">Ma�opolskie</option>
                                        <option value="7">Mazowieckie</option>
                                        <option value="8">Opolskie</option>
                                        <option value="9">Podkarpackie</option>
                                        <option value="10">Podlaskie</option>
                                        <option value="11">Pomorskie</option>
                                        <option value="12">�l�skie</option>
                                        <option value="13">�wi�tokrzyskie</option>
                                        <option value="14">Warmi�sko-Mazurskie</option>
                                        <option value="15">Wielkopolskie</option>
                                        <option value="16">Zachodniopomorskie</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Group>Termin Od</Form.Group>
                                    <Form.Control type="date"/>
                                </Col>
                                <Col>
                                    <Form.Group>Termin Do</Form.Group>
                                    <Form.Control type="date" />
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nazwisko</th>
                        <th>Marka</th>
                        <th>Model</th>
                        <th>Nr tel</th>
                        <th>Email</th>
                        <th>Termin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Kowalski</td>
                        <td>Mazda</td>
                        <td>Cx-3</td>
                        <td>123 123 123</td>
                        <td>kowal@example.com</td>
                        <td>03.03.2026</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Nowak</td>
                        <td>Audi</td>
                        <td>A3</td>
                        <td>321 321 321</td>
                        <td>nowak@gmail.com</td>
                        <td>03.03.2025</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Malysz</td>
                        <td>BMW</td>
                        <td>X3</td>
                        <td>987 654 321</td>
                        <td>adam@gmail.com</td>
                        <td>03.03.2025</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Kurek</td>
                        <td>BMW</td>
                        <td>X3</td>
                        <td>123 456 789</td>
                        <td>bartkur@gmail.com</td>
                        <td>03.05.2025</td>
                    </tr>
                </tbody>
            </Table>
        </Container> 
    )
}