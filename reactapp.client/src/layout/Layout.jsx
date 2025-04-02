import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function Layout() {

    return (
        <div className="app">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="public/image/HomeButton.png" className="logo"/>
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
                                Account
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    )

}