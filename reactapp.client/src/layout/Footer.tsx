import react from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">       
            <h1>CarWorkshop</h1>
            <Row>
                <Col>
                    <p>@CarWorkshop Sp. z.o.o. Wszelskie prawa zastrzezone</p>
                    <p><Link to="/">Polityka Prywatnosci</Link></p>
                    <p><Link to="/">Regulamin</Link></p>
                </Col>
                <Col>
                    <p>support@cw.pl</p>
                    <p>NIP:123-456-78-90</p>
                    <p><Link to="/">Kontakt</Link></p>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;