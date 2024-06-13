import { useGetToken } from '../hooks/useGetToken'
import { useEffect, useState } from 'react'
import axios from 'axios'
// Definir la interfaz fuera del componente
interface UserInfo {
  email: string,
  fullname: string,
  virified: boolean,
  id: string
}

export const Profile = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const token = useGetToken();

  console.log(token)
  useEffect(() => {
    // Función para obtener la información del usuario
    async function getUserInfo() {
      try {
        // const response = await axios.get(`http://localhost:3000/api/v1/userData/${token}`);
        const response = await axios.get(`http://localhost:3000/api/v1/userData/${token}`);
        if (response.status === 200) {
          console.log("Response data: ", response.data);
          setUserInfo(response.data);

        } else {
          console.error('Error fetching user information');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
        console.log("User info: ", userInfo);

      }
    }

    if (token) {
      getUserInfo();
    }

  }, [token, userInfo]);

  useEffect(() => {
    if (!loading) {
      console.log('finally');
    }
  }, [loading]);


  // Aquí iría el renderizado de tu componente
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>User Info: {JSON.stringify(userInfo)}</p>}
    </div>
  );
};

