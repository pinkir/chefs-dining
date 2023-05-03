import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import slider2 from '../../assets/carosal4.png'
import slider3 from '../../assets/carosal3.png'

const Home = () => {
    return (


        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 overlay"
                    src={slider3}
                    alt="First slide"
                />
                <Carousel.Caption className='mb-2'>
                    <h3 className='fs-1 fw-bold'>Welcome to <span className='text-dark '>Chef's</span> Dining</h3>
                    <p className='fw-semibold'>Here you can find so many signature recipes from the best chef's. <br /> Indulge in the flavors of the Mediterranean - Experience the richness of culture and cuisine! <br />Discover the vibrant flavors of the Mediterranean with our authentic recipes, crafted with the freshest ingredients and time-honored techniques. From savory seafood dishes to hearty vegetarian options, our diverse menu will transport your taste buds to the sun-kissed shores of Greece, Italy, and beyond. Come explore the culinary wonders of the Mediterranean today!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption className='mb-2'>
                    <h3 className='fs-1 fw-bold'>Welcome to <span className=''>Chef's</span> Dining</h3>
                    <p className='fw-semibold'>Here you can find so many signature recipes from the best chef's.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;