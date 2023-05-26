import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser} =useContext(AuthContext);
    

    const [error, setError] = useState('');

    const handleSignUp =(event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            event.target.reset();
            updateUserData(result.user, name);
        })
        .catch(error =>{
            console.error(error)
        })

        setError('');
        if(password.length < 6){
            setError('add minimum 6 characters');
            return;
        }

        const updateUserData = (user, name) =>{
            updateProfile(user, {
                displayName: name
            })
            .then(()=>{
                console.log('user name updated')
            })
            .catch(error =>{
                setError(error.message)
            })
        }

    }
    return (
        <Form onSubmit={handleSignUp} className='mx-auto w-25 mt-5 border rounded p-3  bg-success bg-opacity-25 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <h3>Please register</h3>
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
            <Form.Text className="text-danger">
                    {error}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicPhotoText">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" placeholder="Photo" name='photo'  />
            </Form.Group>
            <Button variant="warning" type="submit" >
                Register
            </Button>
            <br />
            
            <br />
            <Form.Text className="text-muted">
                Already registered?? Please <Link to='/login'>Login.</Link>
            </Form.Text>
        </Form>
    );
};

export default Register;