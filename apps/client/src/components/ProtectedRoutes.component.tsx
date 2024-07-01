import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { HomePage } from '../pages/Home.page';
import { useGetToken } from '../hooks/useGetToken';

export const ProtectedRoutes: React.FC = () => {

  const { data, getUserInfo, isLoading, setIsLoading, isLoggedIn } = useAuth()
  const token = useGetToken();
  useEffect(() => {
    if (token != null) {

      setIsLoading(true);


      getUserInfo(token).then(() => {
        setIsLoading(false);
      });
    }
  }, [token]);

  useEffect(() => {
    if (isLoggedIn) console.log('from ProtectedRouter', isLoggedIn)    
  })


  
// useEffect(() => {
//   setTimeout(() => {
    return isLoggedIn ? <Outlet /> : <Navigate to={'/login'}/>;
    
//   }, 1000);

// },)

};
