import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import style from './Header'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }

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
                            {user ?

                                <button className='btn btn-primary' onClick={handleSignOut}>Sign Out</button>

                                :

                                <Nav.Link as={Link} to="/login">
                                    LOG IN
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;