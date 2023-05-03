import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Recipes.css'
import LazyLoad from 'react-lazy-load';
import { FaRegThumbsUp, FaRegEye, FaRegCalendar, FaHamburger } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipes = () => {

    const { id } = useParams();
    const chefsRecipes = useLoaderData();
    console.log(chefsRecipes)
    return (
        <div>
            <div className='chefBanner d-flex gap-4'>
                <div className=' text-dark text-end mt-3'>
                    <h3 className='fw-bold'><i>{chefsRecipes[0].chef.name}</i></h3>
                    <p className='fw-semibold'><i>{chefsRecipes[0].chef.bio}</i></p>
                    <p className='fw-semibold'><FaRegCalendar></FaRegCalendar> <i>Experience: {chefsRecipes[0].chef.yearsOfExperience} years</i></p>
                    <p className='fw-semibold'><FaHamburger></FaHamburger> <i>Total Recipes: {chefsRecipes[0].chef.numberOfRecipes}</i></p>
                    <p className='fw-semibold'><FaRegThumbsUp></FaRegThumbsUp> <i>{chefsRecipes[0].chef.likes}</i></p>
                </div>
                <div>
                    <LazyLoad>
                        <img className='chefImg' src={chefsRecipes[0].chef.picture} alt="" />
                    </LazyLoad>
                </div>
            </div>
            <div>
                <h3 className='text-center mt-5 pt-5 fw-bold text-warning'>Recipes</h3>
                <p className='text-center'><i>Here are some latest recipes from this chef!!!</i></p>
                {
                    chefsRecipes.map(recipe => <RecipeCard
                        key={chefsRecipes.id}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>

        </div>
    );
};

export default Recipes;