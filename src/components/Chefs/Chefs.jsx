import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { Col, Row } from 'react-bootstrap';
import './Chefs.css'

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() =>{
        fetch('https://chefs-dining-server-pinkir.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <div className='text-center mt-5 pt-5 text-wrap'>
            <h3 className='text-info fw-bold'>Meet our chefs</h3>
            <p className='text-secondary fw-thin'>Our passionate and skilled chefs are the heart and soul of our Mediterranean kitchen.<br /> With years of culinary expertise and a deep love for the flavors of the region,<br /> they create delicious and authentic dishes that showcase the best of Mediterranean cuisine.<br /> Whether you're a meat lover or a vegetarian, our chefs have something special for everyone.<br /> Come meet our talented team and taste the difference that their expertise and dedication can make!</p>
            </div>
            <div className='chefBg row gap-4 justify-content-center mt-5 pt-5 pb-5 bg-secondary-subtle'>
            
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