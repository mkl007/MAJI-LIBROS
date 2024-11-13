
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoadingSpinner } from '../utils/LoadingSnipper';
import { useEffect } from 'react';


export const ProtectedRoutes: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  const location = useLocation();

  // if (!isLoggedIn) {
  //   return <Navigate to={'/login'} state={{ from: location }} relative='path'/>
  // }

  return children;
};