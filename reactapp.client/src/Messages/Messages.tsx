import { Col, Container, Row } from "react-bootstrap";
import './Messages.css'

export function Messages() {
    return (
        <Row>
            <Col className="col-3">
                <div className="d-flex flex-column flex-shrink-0 bg-white">
                    <div className="list-group list-group-flush border-bottom">
                        <li className="list-group-item active">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                        <li className="list-group-item">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                        <li className="list-group-item">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                        <li className="list-group-item">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                        <li className="list-group-item">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                        <li className="list-group-item">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                        <li className="list-group-item">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                        <li className="list-group-item">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                        <li className="list-group-item">
                            <h4>Tomasz</h4>
                            <a>Czesc</a>
                        </li>
                    </div>
                </div>
            </Col>
            <Col className="col-9">
                <div className="d-flex flex-column flex-shrink-0 bg-white h-100">
                    <a className="align-self-start">Hello</a>
                    <a className="align-self-end">Hello Tomasz</a>      
                    <div className="flex-grow-1"></div>
                    <div className="row m-0">
                        <div className="col p-0">
                            <input type="text" className="form-control rounded-0" ></input>
                        </div>
                        <div className="col-auto p-0">
                            <button type="submit" className="btn btn-dark rounded-0">Wyslij</button>
                        </div>
                    </div>
                </div>        
            </Col>
        </Row>
        
    )
}