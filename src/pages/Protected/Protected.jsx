import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider';
import SmallSpinner from '../../components/SmallSpinner';

const Protected = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <SmallSpinner/>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace/>
};

export default Protected;