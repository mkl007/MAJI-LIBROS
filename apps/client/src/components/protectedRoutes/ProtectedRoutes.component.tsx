
import {  Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LoadingSpinner } from '../../utils/LoadingSnipper';
import { useEffect } from 'react';

interface ProtectedRoutesProps {
  children?: JSX.Element;
}


export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { isLoading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) navigate('/login')
  }, [user, isLoading])


  if (isLoading) return <LoadingSpinner />
  return children || <Outlet />;

};