import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import './Layout.css';

export function Layout() {

    return (
        <div className="app">     
            <Navbar collapseOnSelect expand="lg" className="navbar mb-4 " sticky="top">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            CarWorkshop
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/" className="d-block"> Home</Link>
                            </Nav.Link>
                            <NavDropdown title="Kadra" id="kadra">
                                <NavDropdown.Item>
                                    <Link to="/pracownik">Nowy Pracownik</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy">Lista Pracownikow</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Klienci" id="klient">
                                <NavDropdown.Item>
                                    <Link to="/add-client">Nowy klient</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/client-list">Lista klientow</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                <Link to="/praca">Zlecenia</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Link to="/magazyn">Magazyn</Link>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Konto
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Container>
                    <Outlet />
                </Container>
            </div>
                <Footer/>
        </div>
    )

}