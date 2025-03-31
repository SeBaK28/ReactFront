import Col from "../../node_modules/react-bootstrap/esm/Col"
import Container from "../../node_modules/react-bootstrap/esm/Container"
import FormGroup from "../../node_modules/react-bootstrap/esm/FormGroup"
import FormLabel from "../../node_modules/react-bootstrap/esm/FormLabel"
import Row from "../../node_modules/react-bootstrap/esm/Row"
import Tabs from "../../node_modules/react-bootstrap/esm/Tabs"
import { FormControl } from "../../node_modules/react-bootstrap/esm/index"

export const Pracownik = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button vatiant="primary" className="me-2">Dodaj</Button>
                        <Button vatiant="info" className="me-2">Anuluj</Button>
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
                                    <FormGroup>
                                        <FormLabel>Imie</FormLabel>
                                        <FormControl type="text"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FromGroup>
                                      
                                    <FormLabel>Nazwisko</FormLabel>
                                        <FormControl type="text"/>
                                    </FromGroup>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Forma Zatrudnienia</FormLabel>
                                        <FormSelect>
                                            <option>Wybierz</option>
                                            <option value="1">UOP</option>
                                            <option value="2">UOZ</option>
                                            <option value="3">UOD</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
        </Container>
    )
}