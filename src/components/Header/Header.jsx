import React, { useContext } from 'react';
import './Header.css'
import { Button, Container, Form, Nav, NavLink, Navbar} from 'react-bootstrap';
import ActiveRoute from '../ActiveRoute/ActiveRoute';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogout =() =>{
        logOut()
        .then()
        .catch(error => console.log(error))

    }
    return (

        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" className='fw-bold text-warning'>Chef's Dining</Navbar.Brand>
                
                    <Nav className="me-auto my-2 my-lg-0  d-flex">
                        <ActiveRoute href="/">Home</ActiveRoute>
                        <ActiveRoute href='blog'>Blogs</ActiveRoute>
                        
                    </Nav>

                    {user && <p><FaUserCircle></FaUserCircle> {user.displayUser}</p>}

                    {user ? 
                    <Button onClick={handleLogout} variant="btn btn-warning">LogOut</Button>
                    :
                    <Nav.Link href="/login"><Button variant="btn btn-warning">Login</Button></Nav.Link>}
                
            </Container>
        </Navbar>
        
    );
};

export default Header;