import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Chef = ({ chef }) => {
    console.log(chef)
    const { id, name, likes, picture, numberOfRecipes, yearsOfExperience } = chef;
    return (
        <Card style={{ width: '25%', backgroundColor: '#E6E6FA' }}>
            <Card.Img variant="top" src={picture} className='pt-2' />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Number Of Recipes: {numberOfRecipes} <br />
                Years Of Experience: {yearsOfExperience} <br />
                Likes: {likes}
                </Card.Text>
                <Button variant="info">View Recipe</Button>
            </Card.Body>
        </Card>
    );
};

export default Chef;