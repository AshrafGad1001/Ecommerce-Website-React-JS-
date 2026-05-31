import { Navigate } from 'react-router-dom';

export default function RoutingGuards({ children }) {

    const token = localStorage.getItem('userToken');

    if (!token) {
        return <Navigate to="/login" state={{ message: "You must login first to access this page" }} />
    }

    return children;
}