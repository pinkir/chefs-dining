import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;