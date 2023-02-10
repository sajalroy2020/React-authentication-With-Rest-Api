import Cookies from 'js-cookie';
import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const token = Cookies.get('token');
    if (token) {
        return children;
    } else {
        return <Navigate to="/" replace />
    }
}
export const AuthCheckRoute = ({ children }) => {
    const token = Cookies.get('token');
    if (!token) {
        return children;
    } else {
        return <Navigate to="/" replace />
    }
}

