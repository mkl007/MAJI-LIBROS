import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';


export const ProtectedRoutes: React.FC<{ children: JSX.Element }> = ({ children }) => {

  const { isLoggedIn } = useAuth()
  const location = useLocation();
  console.log(isLoggedIn)

  return !isLoggedIn ? (<Navigate to={'/login'} state={{ from: location }} replace />) : (children);
}
