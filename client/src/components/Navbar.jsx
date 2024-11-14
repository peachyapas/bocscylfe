import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar_Self = () => {


    return (
        <Navbar expand="lg" className="navbar-custom bg-body-tertiary fixed-top">
            <Container fluid>
                <Navbar.Brand href="/">Peach's book stuff</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Navbar_Self;
