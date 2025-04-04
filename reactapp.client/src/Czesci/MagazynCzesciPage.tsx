import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 



export const Magazyn = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Znajdz</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nazwa</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Widok</Form.Label>
                                <Form.Check type="radio" label="Cena" />
                                <Form.Check type="radio" label="Ilosc" />
                                <Form.Check type="radio" label="Nr Katalogowy" />
                                <Form.Check type="radio" label="Marka" />
                                <Form.Check type="radio" label="Cena za sztuke" />
                                <Form.Check type="radio" label="Kod kreskowy" />
                                <Form.Check type="radio" label="Zdjecie" />
                            </Form.Group>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nazwa</th>
                        <th>Nr kat.</th>
                        <th>Cena</th>
                        <th>Ilosc</th>
                        <th>Kod Kreskowy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>b7f3a1d9e4</td>
                        <td>Wahacz</td>
                        <td>123123</td>
                        <td>500 PLN</td>
                        <td>13</td>
                        <td>5901234123457</td>
                    </tr>
                    <tr>
                        <td>c2d8f6a0b5</td>
                        <td>Gaznik</td>
                        <td>321321</td>
                        <td>100 PLN</td>
                        <td>5</td>
                        <td>8712345678901</td>
                    </tr>
                    <tr>
                        <td>f6g7h8i9j0</td>
                        <td>Amortyzator</td>
                        <td>234234</td>
                        <td>350 PLN</td>
                        <td>7</td>
                        <td>5902345234568</td>
                    </tr>
                    <tr>
                        <td>k1l2m3n4o5</td>
                        <td>Sprezyna zawieszenia</td>
                        <td>345345</td>
                        <td>220 PLN</td>
                        <td>15</td>
                        <td>5903456345679</td>
                    </tr>
                    <tr>
                        <td>p6q7r8s9t0</td>
                        <td>Klocki hamulcowe</td>
                        <td>456456</td>
                        <td>180 PLN</td>
                        <td>20</td>
                        <td>5904567456780</td>
                    </tr>
                    <tr>
                        <td>u1v2w3x4y5</td>
                        <td>Tarcz hamulcowa</td>
                        <td>567567</td>
                        <td>300 PLN</td>
                        <td>10</td>
                        <td>5905678567891</td>
                    </tr>
                    <tr>
                        <td>z6a7b8c9d0</td>
                        <td>Pompa paliwa</td>
                        <td>678678</td>
                        <td>850 PLN</td>
                        <td>5</td>
                        <td>5906789678902</td>
                    </tr>
                    <tr>
                        <td>e1f2g3h4i5</td>
                        <td>Filtr oleju</td>
                        <td>789789</td>
                        <td>40 PLN</td>
                        <td>50</td>
                        <td>5907890789013</td>
                    </tr>
                    <tr>
                        <td>j6k7l8m9n0</td>
                        <td>Filtr powietrza</td>
                        <td>890890</td>
                        <td>55 PLN</td>
                        <td>30</td>
                        <td>5908901890124</td>
                    </tr>
                    <tr>
                        <td>o1p2q3r4s5</td>
                        <td>Alternator</td>
                        <td>901901</td>
                        <td>1200 PLN</td>
                        <td>3</td>
                        <td>5909012901235</td>
                    </tr>
                    <tr>
                        <td>t6u7v8w9x0</td>
                        <td>Rozrusznik</td>
                        <td>112112</td>
                        <td>950 PLN</td>
                        <td>4</td>
                        <td>5901123112346</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}