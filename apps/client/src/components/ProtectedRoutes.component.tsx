import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoadingSpinner } from '../utils/LoadingSnipper';

export const ProtectedRoutes: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  const location = useLocation();

  // Si está cargando la autenticación, mostramos un spinner
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Si no está logueado, redirige a la página de login
  setTimeout(() => {
    if (!isLoggedIn) {
      return <Navigate to={'/login'} state={{ from: location }} replace />;
    }
  }, 1800);

  // Si está logueado, renderiza los componentes hijos
  return children;
};
