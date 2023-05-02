import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Blogs = () => {
    return (
        <ListGroup className='mt-5'>
            <ListGroup.Item> <span className='text-primary fw-bold'>Differences between uncontrolled and controlled components: <br /> </span> controlled components gets its state from parent component. parent component can control the state. <br /> uncontrolled components can manage their own state and don't need props from parent component.</ListGroup.Item>
            <ListGroup.Item> <span className='text-primary fw-bold'>How to validate React props using PropTypes? </span> <br /> </ListGroup.Item>
            <ListGroup.Item><span className='text-primary fw-bold'>The difference between nodejs and express js: </span> <br /></ListGroup.Item>
            <ListGroup.Item><span className='text-primary fw-bold'>What is a custom hook, and why will you create a custom hook? </span> <br /></ListGroup.Item>
            
        </ListGroup>
    );
};

export default Blogs;