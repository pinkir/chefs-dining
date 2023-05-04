import React, { useContext } from 'react';
import './Header.css'
import { Button, Container, Form, Nav, NavLink, Navbar} from 'react-bootstrap';
import ActiveRoute from '../ActiveRoute/ActiveRoute';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {

    const {user, logOut, userProfile} = useContext(AuthContext);

    
   

    const handleLogout =() =>{
        logOut()
        .then()
        .catch(error => console.log(error))

    }
    const handleProfile =(event) =>{
        event.preventDefault;
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(name, email, user)
        userProfile()
        .then()
        .catch(error => console.log(error))

    }


    return (

        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" className='fw-bold text-warning'>Chef's Dining</Navbar.Brand>
                
                    <Nav className="me-auto my-2 my-lg-0  d-flex">
                        <ActiveRoute href="/">Home</ActiveRoute>
                        <ActiveRoute href='/blog'>Blogs</ActiveRoute>
                        
                    </Nav>

                    {user && <p><FaUserCircle onClick={handleProfile} className='fs-4 mt-2 me-2' title={user.displayName} ></FaUserCircle></p>}

                    {user ? 
                    <Button onClick={handleLogout} variant="btn btn-warning">LogOut</Button>
                    :
                    <Nav.Link href="/login"><Button variant="btn btn-warning">Login</Button></Nav.Link>}
                
            </Container>
        </Navbar>
        
    );
};

export default Header;