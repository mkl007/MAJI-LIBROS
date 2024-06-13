import { useGetToken } from '../hooks/useGetToken'
import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth';
// Definir la interfaz fuera del componente


export const Profile = () => {
  const { data, getUserInfo, isLoading, setIsLoading } = useAuth()
  const token = useGetToken();

  useEffect(() => {
    if (token != null) {
      setIsLoading(true); // Establecer isLoading a true al inicio del efecto

      // Obtener la información del usuario
      getUserInfo(token).then(() => {
        setIsLoading(false); // Establecer isLoading a false una vez que la solicitud se completa
      });
    }
  }, [token]); 

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>User Info: {JSON.stringify(data)}</p>}
    </div>
  );
};

