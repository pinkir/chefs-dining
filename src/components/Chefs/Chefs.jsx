import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { Col, Row } from 'react-bootstrap';
import './Chefs.css'

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <div className='text-center mt-5 pt-5 text-wrap'>
            <h3 className='text-info fw-bold'>Meet our chefs</h3>
            <p className='text-secondary fw-thin'>Our passionate and skilled chefs are the heart and soul of our Mediterranean kitchen. With years of culinary expertise and a deep love for the flavors of the region, they create delicious and authentic dishes that showcase the best of Mediterranean cuisine. Whether you're a meat lover or a vegetarian, our chefs have something special for everyone. Come meet our talented team and taste the difference that their expertise and dedication can make!</p>
            </div>
            <div className='chefBg row gap-4 justify-content-center mt-5 pt-5 pb-5 bg-dark '>
            
            {
                chefs.map(chef => <Chef 
                    key={chef.id}
                    chef = {chef}
                
                ></Chef> )
            }
            
            </div>

        </div>
    );
};

export default Chefs;