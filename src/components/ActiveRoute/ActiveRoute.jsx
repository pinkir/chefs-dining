import React from 'react';
import { NavLink } from 'react-bootstrap';
import './ActiveRoute.css'

const ActiveRoute = ({href, children}) => {
    return (
        <NavLink
        
        href ={href}
        className={({isActive}) => isActive ? ' active' : ''} >
            {children}

        </NavLink>
    );
};

export default ActiveRoute;