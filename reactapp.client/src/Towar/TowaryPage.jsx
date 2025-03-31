import AccordionBody from "../../node_modules/react-bootstrap/esm/AccordionBody"
import AccordionHeader from "../../node_modules/react-bootstrap/esm/AccordionHeader"
import AccordionItem from "../../node_modules/react-bootstrap/esm/AccordionItem"
import Container from "../../node_modules/react-bootstrap/esm/Container"
import FormGroup from "../../node_modules/react-bootstrap/esm/FormGroup"
import FormLabel from "../../node_modules/react-bootstrap/esm/FormLabel"
import FormSelect from "../../node_modules/react-bootstrap/esm/FormSelect"

export const Towary = () => {
    return (
        <Container fluid>
            <According defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <AccordionHeader>Filtrowanie Listy</AccordionHeader>
                    <AccordionBody>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Szukaj po</FormLabel>
                                        <FormControl type="text"/>
                                    </FormGroup>
                                </Col>
                                <Col className="col-1">
                                    <FormGroup>
                                        <FormLabel>Cena od</FormLabel>
                                        <FormControl type="text"/>
                                    </FormGroup>
                                </Col>
                                <Col className="col-1">
                                    <FormGroup>
                                        <FormLabel>Cena do</FormLabel>
                                        <FormControl type="text"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Szukaj kat.</FormLabel>
                                        <FormSelect>
                                            <option>Wybierz</option>
                                            <option value="1">Cegly</option>
                                            <option value="2">Wylweki</option>
                                            <option value="3">Farby</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </AccordionBody>
                </AccordionItem>
            </According>
            <Table striped dordered hover>
                <thead>
                    <tr>
                        <th>Kod</th>
                        <th>Nazwa</th>
                        <th>Kategoria</th>
                        <th>PKWiU</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Towar 1</td>
                        <td>Kategoria 1</td>
                        <td>111</td>
                        <td>111</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Towar 2</td>
                        <td>Kategoria 2</td>
                        <td>222</td>
                        <td>222</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Towar 3</td>
                        <td>Kategoria 3</td>
                        <td>333</td>
                        <td>333</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}