import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const handleSignUp =(event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        setError('');

        if(password.length < 8){
            setError('add minimum 8 characters');
            return;
        }
    }
    return (
        <Form onSubmit={handleSignUp} className='mx-auto w-25 mt-5 border rounded p-3  bg-success bg-opacity-25 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" name='name' required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' required />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" placeholder="Photo" name='photo'  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="warning" type="submit" >
                Register
            </Button>
            <br />
            <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            <br />
            <Form.Text className="text-muted">
                Already registered?? Please <Link to='/login'>Login.</Link>
            </Form.Text>
        </Form>
    );
};

export default Register;