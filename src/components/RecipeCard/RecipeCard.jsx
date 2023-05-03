import React from 'react';
import './Recipecard.css'
import { Badge, Button } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
    const { id, name, image, ingredients, cookingMethod, rating } = recipe;

    const handleToast =() =>{
        return toast('Recipe Added');
    }
    return (
        <div className='p-5 bg-dark m-5 border rounded bgCard'>
            <div>

                <img className='recipeImg mb-3' src={image} alt="" />
            </div>
            <div className='text-light'>
                <i><h3 className='text-warning'>{name} <Badge bg="danger">New</Badge></h3>
                    <p> <span className='text-warning fw-bold'>Ingredients:</span> {ingredients}</p>
                    <p> <span className='text-warning fw-bold'>Cooking Method:</span> {cookingMethod}</p>
                    <p className='d-flex gap-2'>
                        <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    /> {rating}</p></i>
                    <Button onClick={handleToast} variant="warning">Favorite</Button>
                    <ToastContainer />

            </div>
        </div>
    );
};

export default RecipeCard;