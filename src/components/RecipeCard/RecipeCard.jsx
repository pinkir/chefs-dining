import React from 'react';
import { Badge } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
    const { id, name, image, ingredients, cookingMethod} = recipe;
    return (
        <div>
            <div className='mt-5 pt-5'>
                <h3>{name} <Badge bg="success">New</Badge></h3>

                <img className='w-25 ms-5' src={image} alt="" />
            </div>
            <div>
                <p>Ingredients: {ingredients}</p>
                <p>Cooking Method: {cookingMethod}</p>

            </div>
        </div>
    );
};

export default RecipeCard;