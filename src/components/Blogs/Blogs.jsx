import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { PDFViewer } from '@react-pdf/renderer';

const Blogs = () => {
    return (
        <div>
            <ListGroup className='mt-5'>
                <ListGroup.Item> <span className='text-primary fw-bold'>Differences between uncontrolled and controlled components: <br /> </span> controlled components gets its state from parent component. parent component can control the state. <br /> uncontrolled components can manage their own state and don't need props from parent component.</ListGroup.Item>
                <ListGroup.Item> <span className='text-primary fw-bold'>How to validate React props using PropTypes?</span> <br /> We can use propTypes to get the prop in expected type, <br /> like number, string, object, boolean, array etc. if we want to get something in string type we have to import the propType <br /> and mention it as (propTypes.string) in a function. <br /> </ListGroup.Item>
                <ListGroup.Item><span className='text-primary fw-bold'>The difference between nodejs and express js: </span> <br /> Node.js helps javaScript to run on server side. Node.js is for building fast scalable network application. <br /> Express.js framework of node.js. It helps to build APIs. It handles HTTP request and response, middleware. we can create web-app easily.</ListGroup.Item>
                <ListGroup.Item><span className='text-primary fw-bold'>What is a custom hook, and why will you create a custom hook? </span> <br /> Custom hook is a function that can be used in multiple components using other build in hooks like useState, useContext etc. <br /> We create a custom hook for reusing the common function and codes for other components.</ListGroup.Item>

            </ListGroup>
            {/* <div>
            <PDFViewer>
                <Button onClick={}>Convert to pdf</Button>
            </PDFViewer>
            </div> */}
        </div>
    );
};

export default Blogs;