import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../assets/carosal1.jpg'
import slider2 from '../../assets/carosal4.jpg'
import slider3 from '../../assets/carosal3.jpg'

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={slider3}
                    alt="First slide"
                />
                <Carousel.Caption className='mb-2'>
                    <h3 className='fs-1 fw-bold'>Welcome to <span className='text-dark '>Chef's</span> Dining</h3>
                    <p className='fw-semibold'>Here you can find so many signature recipes from the best chef's from Bangladesh.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption className='mb-2'>
                    <h3 className='fs-1 fw-bold'>Welcome to <span className=''>Chef's</span> Dining</h3>
                    <p className='fw-semibold'>Here you can find so many signature recipes from the best chef's from Bangladesh.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;