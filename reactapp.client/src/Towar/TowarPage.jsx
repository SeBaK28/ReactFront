import { Button, Form, FormControl, FormGroup, FormLabel, Tabs } from "../../node_modules/react-bootstrap/esm/index"

export const Towar = () => {
    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Zapisz</Button>
                        <Button variant="primary">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Tabs
                        defaultActiveKey="DanePodstawowe"
                        className="mb-3"
                    >
                        <Tab eventKey="danePodstawowe" title="DanePodstawowe">
                            <Row className="mb-3">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Kod</FormLabel>
                                        <FormControl type="text"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Kategorie</FormLabel>
                                        <FormSelect>
                                            <option>Wybierz</option>
                                            <option value="1">Cegly</option>
                                            <option value="2">Wylewki</option>
                                            <option value="3">Farby</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="cena" title="Cena">
                            <Row className="mb-3">
                                <Col>
                                    <FormGroup>
                                        <FormLabel>PKWIU</FormLabel>
                                        <FormControl type="text"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>VatZakupu</FormLabel>
                                        <FormControl type="text"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>VatSprzedazy</FormLabel>
                                        <FormControl type="text" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>CenaDomyslna</FormLabel>
                                        <FormControl type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="uwagi" title="Uwagi">
                            <Row className="mb-3">
                                <Col className="col-8">
                                    <FormGroup className="mb-3">
                                        <FormLabel>DodatkoweInformacje</FormLabel>
                                        <FormControl as="textarea"/>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <FormLabel>Uwagi</FormLabel>
                                        <FormControl as="textarea"></FormControl>
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