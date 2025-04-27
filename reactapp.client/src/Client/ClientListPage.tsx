import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { useEffect, useState } from 'react';
import { Client } from '../types/ClientTyple/Client.ts';
import ProvinceList from '../GroupSelect/provinceSelect.tsx';

export const ClientList = () => {
    const [
       listClient , setListClient] = useState<Client[]>([
        {
            Id: 1,
            Nazwisko: "Kowalski",
            Marka: "Mazda",
            Model: "CX-3",
            NrTel: "123123123",
            Email: "kowal@example.com",
            Termin: "03.03.2023",
        },
        {
            Id: 2,
            Nazwisko: "Nowak",
            Marka: "Audi",
            Model: "A3",
            NrTel: "321321321",
            Email: "nowak@example.com",
            Termin: "04.04.2024",
        },
        {
            Id: 3,
            Nazwisko: "Malysz",
            Marka: "BMW",
            Model: "X3",
            NrTel: "123456789",
            Email: "malysz@example.com",
            Termin: "05.05.2025",
        }]);

    useEffect(() => {
        const listClientApi: Client[] = [
            {
                Id: 1,
                Nazwisko: "Kowalski",
                Marka: "Mazda",
                Model: "CX-3",
                NrTel: "123123123",
                Email: "kowal@example.com",
                Termin: "03.03.2023",
            },
            {
                Id: 2,
                Nazwisko: "Nowak",
                Marka: "Audi",
                Model: "A3",
                NrTel: "321321321",
                Email: "nowak@example.com",
                Termin: "04.04.2024",

            },
            {
                Id: 3,
                Nazwisko: "Malysz",
                Marka: "BMW",
                Model: "X3",
                NrTel: "123456789",
                Email: "malysz@example.com",
                Termin: "05.05.2025",
            }];
            
        setListClient(listClientApi);
    },[])
    return(
        <Container fluid>
            <div className="tableList mb-4" >            
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
                                    <ProvinceList/>
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
                    {listClient.map((item, index) =>
                        <tr key={index}>
                            <td>{item.Id}</td>
                            <td>{item.Nazwisko}</td>
                            <td>{item.Marka}</td>
                            <td>{item.Model}</td>
                            <td>{item.NrTel}</td>
                            <td>{item.Email}</td>
                            <td>{item.Termin}</td>
                        </tr>)}
                </tbody>
                </Table>
            </div>
        </Container> 
    )
}