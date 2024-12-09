
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoadingSpinner } from '../utils/LoadingSnipper';
import { useEffect } from 'react';


interface ProtectedRoutesProps {
  children?: JSX.Element; // Ahora children es opcional
}


export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { isLoading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && isLoading) navigate('/login ')
  })

  if (isLoading) return <LoadingSpinner />
  return children || <Outlet />;

};