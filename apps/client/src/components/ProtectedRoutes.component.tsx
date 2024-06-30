import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export interface ProtectedRouteProps {
    ProtectedRoutes: JSX.Element
}

export const ProtectedRoutes: ProtectedRouteProps = () => {
    const { isLoading, isLoggedIn } = useAuth();
    if (!isLoggedIn && !isLoading) return <Navigate to='/login' />

    return <Outlet />;  
}