import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';


export const ProtectedRoutes = () => {
  const { isLoading, isLoggedIn } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) return console.log('Loading..')
    else if (!isLoggedIn && !isLoading) {
      console.log('Hi, is not loggedin and not isloading')
      return navigate('/login')
    }
  }, [isLoggedIn])
  return <Outlet />;
}
