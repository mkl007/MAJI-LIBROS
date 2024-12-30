import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LoadingSpinner } from '../../utils/LoadingSnipper';


interface AdminProtectedRoutesProps {
  children?: JSX.Element;
}

export const AdminProtectedRoutes: React.FC<AdminProtectedRoutesProps> = ({ children }) => {
  const { isLoading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate('/login');
      } else if (user.userInfo.role !== 'admin') {
        return console.log('You are not an admin');
        // navigate('/not-authorized'); // Navigate to a not authorized page if the user is not an admin
      }
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    if (!user && !isLoading) navigate('/login')
    else if(user && user.userInfo.role !== 'admin') navigate('/not-authorized')
  }, [user, isLoading, navigate])


  if (isLoading) return <LoadingSpinner />;
  return children || <Outlet />;
};