import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const [error, setError] = useState('');


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(error => console.error(error));



        if (error) {
            setError(error.massage);
            return;
        }
    }
    return (
        <Form onSubmit={handleLogin} className='mx-auto w-25 mt-5 border rounded p-3 bg-dark bg-opacity-50 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <h3>Please login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required />
            </Form.Group>

            <Form.Text className="text-danger">
                {error}
            </Form.Text>

            <Button variant="warning" type="submit" >
                Login
            </Button>
            <br />
            <Form.Text className="text-muted">
                New to Chef's Dining?? Please <Link to='/register'>register.</Link>
            </Form.Text>
            <br />

            <Button variant="btn btn-success" type="submit" className='mt-5 mb-2 ms-5'><FaGoogle></FaGoogle> Sign in with Google
            </Button>
            <br />
            <Button variant="btn btn-secondary" type="submit" className='ms-5'><FaGithub></FaGithub> Sign in with Github
            </Button>
        </Form>
    );
};

export default Login;