import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Recipes.css'

const Recipes = () => {
    
    const {id} = useParams();
    const chefsRecipes = useLoaderData();
    console.log(chefsRecipes)
    return (
        <div>
            <div className='chefBanner'>
                <div>
                    <h3>{chefsRecipes[0].chef.name}</h3>
                    <p>{chefsRecipes[0].chef.bio}</p>
                </div>
                

            </div>
        </div>
    );
};

export default Recipes;