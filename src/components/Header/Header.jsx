import React from 'react';
import { Button, Container, Form, Nav, NavLink, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" className='fw-bold text-warning'>Chef's Dining</Navbar.Brand>
                
                    <Nav className="me-auto my-2 my-lg-0  d-flex text-dark">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blog">Blogs</Nav.Link>
                    </Nav>


                    <Nav.Link href="/login"><Button variant="btn btn-warning">Login</Button></Nav.Link>
                
            </Container>
        </Navbar>
    );
};

export default Header;