import React, { useContext } from 'react';
import { AuthContext } from '../Component/AuthProvider/AuthProvider';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';

const Loader = () => {
    let circleCommonClasses = 'h-2.5 w-2.5 bg-current rounded-full';

    return (
   <div className='flex'>
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses} mr-1`}></div>
        <div className={`${circleCommonClasses}`}></div>
   </div>
    );
};

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading)
    {
        return Loader()
    }
    if(user)
    {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;