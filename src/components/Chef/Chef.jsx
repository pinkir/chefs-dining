import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaRegThumbsUp, FaRegEye , FaRegCalendar, FaHamburger} from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    // console.log(chef)
    const { id, name, likes, picture, numberOfRecipes, yearsOfExperience } = chef;
    return (
        <Card style={{ width: '25%', backgroundColor: '' }}>
            <LazyLoad height={225}>
            <Card.Img variant="top" src={picture} className='pt-2 rounded' />
            </LazyLoad>
            <Card.Body>
                <Card.Title className='text-info'>{name}</Card.Title>
                <Card.Text className='text-center fw-semibold'>
                <FaHamburger></FaHamburger> Number Of Recipes: {numberOfRecipes} <br />
                <FaRegCalendar></FaRegCalendar> Years Of Experience: {yearsOfExperience} <br />
                <FaRegThumbsUp></FaRegThumbsUp> Likes: {likes}
                </Card.Text>
                <Link to={`/chefs/${id}`}><Button className='bg-info'><FaRegEye></FaRegEye> View details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Chef;