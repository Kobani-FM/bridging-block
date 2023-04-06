import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    const navStyle = {
        height: '100px' // change this value to increase the navbar height
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className="px-5" href="/">My Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto ms-auto me-5">
                    <Nav.Link href="/" className="px-5">Home</Nav.Link>
                    <Nav.Link href="/about" className="px-5">About</Nav.Link>
                    <Nav.Link href="/services" className="px-5">Services</Nav.Link>
                    <Nav.Link href="/contact" className="px-5">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;