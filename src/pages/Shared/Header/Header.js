import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './Header'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">TUTOR HERE!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/document">DOC</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                LOG IN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;