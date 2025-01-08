import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex items-center justify-center'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname} replace></Navigate>
};

export default PrivateRoutes;