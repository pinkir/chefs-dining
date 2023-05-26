import React, { useState } from 'react';
import './Recipecard.css'
import { Badge, Button } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart } from "react-icons/fa";
import { ScrollRestoration } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const { id, name, image, ingredients, cookingMethod, rating } = recipe;
    const [favorite, setFavorite] = useState(false);

    const handleToast =(event) =>{
        setFavorite(event.target)
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
                    <Button onClick={handleToast} disabled={favorite} variant="warning" type="submit" className='text-light fw-bold' ><FaHeart></FaHeart> Favorite</Button>
                    <ToastContainer />

            </div>
            {/* for : after re-loud page should start from top */}
            <ScrollRestoration />
        </div>
    );
};

export default RecipeCard;