import { useGetToken } from '../hooks/useGetToken'
import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth';


export const Profile = () => {
  const { data, getUserInfo, isLoading, setIsLoading } = useAuth()
  const token = useGetToken();

  useEffect(() => {
    if (token != null) {
      setIsLoading(true); 

      getUserInfo(token).then(() => {
        setIsLoading(false); 
      });
    }
  }, [token]); 

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>User Info: {JSON.stringify(data)}</p>}
    </div>
  );
};

