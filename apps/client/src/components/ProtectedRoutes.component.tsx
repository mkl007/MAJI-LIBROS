
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoadingSpinner } from '../utils/LoadingSnipper';
import { useEffect } from 'react';
import { MiniLoadingSpinner } from '../utils/MiniLoadingSnipper';
import { useBook } from '../hooks/useBook';


interface ProtectedRoutesProps {
  children?: JSX.Element;
}


export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { isLoading, user } = useAuth();
  const { isLoadingBook } = useBook();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && isLoading) navigate('/login')
  })

  if (isLoading) return <LoadingSpinner />
  // if (isLoadingBook) return <MiniLoadingSpinner />
  return children || <Outlet />;

};