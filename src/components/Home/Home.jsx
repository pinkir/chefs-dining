import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import slider2 from '../../assets/carosal4.png'
import slider3 from '../../assets/carosal3.png'
import Chefs from '../Chefs/Chefs';
import './Home.css'
import salad1 from '../../assets/salad1.jpg'
import salad2 from '../../assets/salad2.jpg'
import salad3 from '../../assets/salad3.jpg'
import salad4 from '../../assets/salad4.jpg'
import salad5 from '../../assets/salad5.jpg'

const Home = () => {
    return (


        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 overlay"
                        src={slider3}
                        alt="First slide"
                    />
                    <Carousel.Caption className='mb-2'>
                        <h3 className='fs-1 fw-bold'>Welcome to <span className='text-dark '>Chef's</span> Dining</h3>
                        <p className='fw-semibold'>Here you can find so many signature recipes from the best chef's. <br /> Indulge in the flavors of the Mediterranean - Experience the richness of culture and cuisine!</p>
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
            <div>

                <Chefs></Chefs>

            </div>
            <div className='pt-5 mt-5'>
                <div className='about text-center p-5 m-5'>
                    <i><h3 className='m-5 fw-bold'>About us</h3>
                        <p className='fw-semibold'>We are passionate about sharing the flavors, culture, and history of the Mediterranean <br /> region with the world. Our blog features a variety of articles, recipes, and resources <br /> to help you discover the rich and diverse culinary traditions of countries such as <br />Greece, Italy, Turkey, Spain, and Morocco. <br /> Discover the vibrant flavors of the Mediterranean with our authentic recipes, crafted with the freshest ingredients <br /> and time-honored techniques.  From savory seafood dishes to hearty vegetarian options, our diverse menu will <br /> transport your taste buds to the sun-kissed shores of Greece, Italy, and beyond. <br /> Come explore the culinary wonders of the Mediterranean today!</p></i>

                </div>
            </div>
            <div className='text-center'>
                <i><h4 className='pt-5 mt-5'>Our Latest Recipes</h4></i>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={salad1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Moussaka</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={salad2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Paella</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={salad3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Fattoush</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={salad4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Tagine</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={salad5}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Ratatouille</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;