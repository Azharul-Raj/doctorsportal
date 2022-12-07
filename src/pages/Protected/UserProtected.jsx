import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpinner from '../../components/SmallSpinner';
import { authContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const UserProtected = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    console.log(isAdmin);
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <SmallSpinner/>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace/>
};

export default UserProtected;