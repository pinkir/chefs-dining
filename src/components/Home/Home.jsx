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
import salad8 from '../../assets/salad8.jpg'
import recipe from '../../assets/recipee.jpg'
import { ScrollRestoration } from 'react-router-dom';
import Partners from '../Partners/Partners';
import New from '../New/New';

const Home = () => {
    return (


        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-inline w-50 overlay"
                        src={slider3}
                        alt="First slide"
                    />
                    <Carousel.Caption className=' text-end'>
                        <h3 className='fs-2 fw-bold'>Welcome to <span className='text-dark '>Chef's</span> Dining</h3>
                        <p className='fw-semibold'>Here you can find so many signature recipes from <br />the best chef's. Indulge in the flavors of the <br /> <span className='text-dark fw-bold'>Mediterranean - Experience</span> <br /> the richness of culture and cuisine!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className=' text-end text-dark'>
                        <h3 className='fs-2 fw-bold'>Mediterranean cuisine in <br /> <span className='text-light'>Chef's</span> Dining</h3>
                        <p className='fw-semibold'>Mediterranean cuisine is known for its use of fresh and <br /> flavorful ingredients like olive oil, herbs, and vegetables <br /> as well as dishes that feature seafood, <br /> legumes, grains, and lean proteins like chicken and lamb.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='pt-5 mt-5'>
                <div>
                    <New></New>
                </div>
            </div>
            <div>

                <Chefs></Chefs>

            </div>
            <div className='pt-5 mt-5'>
                <div className='about text-center p-5 m-5 img-fluid'>
                    <i><h3 className='m-5 fw-bold'>About us</h3>
                        <p className='fw-sm'>We are passionate about sharing the flavors, culture, and history of the Mediterranean <br /> region with the world. Our blog features a variety of articles, recipes, and resources <br /> to help you discover the rich and diverse culinary traditions of countries such as <br />Greece, Italy, Turkey, Spain, and Morocco. <br /> Discover the vibrant flavors of the Mediterranean with our authentic recipes, crafted with the freshest ingredients <br /> and time-honored techniques.  From savory seafood dishes to hearty vegetarian options, our diverse menu will <br /> transport your taste buds to the sun-kissed shores of Greece, Italy, and beyond. <br /> Come explore the culinary wonders of the Mediterranean today!</p></i>

                </div>
            </div>
            <div className='pt-5 mt-5'>
                <div>
                    <Partners></Partners>
                </div>
            </div>
            <div className='text-center'>
                <i><h4 className='pt-5 mt-5'>Your Mediterranean Recipes</h4></i>
                <i><p className='pb-5 mb-5'>You can add your own Mediterranean recipes in our site. </p></i>
                <Carousel className='d-flex'>
                    
                    <Carousel.Item >
                        <img
                            className="d-inline w-50"
                            src={salad2}
                            alt="Second slide"
                        />
                        <img
                            className="d-inline w-50"
                            src={recipe}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Paella</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-inline w-50"
                            src={salad8}
                            alt="Third slide"
                        />
                        <img
                            className="d-inline w-50"
                            src={recipe}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Fattoush</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-inline w-50"
                            src={salad5}
                            alt="Third slide"
                        />
                        <img
                            className="d-inline w-50"
                            src={recipe}
                            alt="Third slide"
                        />
                        
                        <Carousel.Caption>
                            <h3>Ratatouille</h3>
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                </Carousel>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default Home;