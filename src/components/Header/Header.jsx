import React from 'react';
import { Button, Container, Form, Nav, NavLink, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Chef's Dining</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blog">Blogs</Nav.Link>
                    </Nav>


                    <Nav.Link href="/login"><Button variant="outline-success">Login</Button></Nav.Link>
                
            </Container>
        </Navbar>
    );
};

export default Header;