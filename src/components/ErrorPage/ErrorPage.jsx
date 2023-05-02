import React from 'react';
import errorPic from '../../assets/5_5_.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <div>
            <div className='position-absolute top-50 start-50 translate-middle ms-5 ps-5'>
                <img className='w-75' src={errorPic} alt="" />
            </div>
            <Link to='/'><Button className='position-absolute bottom-0 start-50 translate-middle-x mb-5 text-dark fw-bold btn-warning'>Go Back</Button></Link>
            
        </div>

    );
};

export default ErrorPage;