import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetToken } from '../hooks/useGetToken';

// Definir la interfaz fuera del componente

export const GetUserInfo = () => {
    interface UserInfo {
        email: string,
        fullname: string,
        virified: boolean,
        id: string
    }

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const token = useGetToken();

    useEffect(() => {
        // Función para obtener la información del usuario
        async function getUserInfo() {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/userData/${token}`);
                if (response.status === 200) {
                    console.log("Response data: ", response.data);
                    setUserInfo(response.data);
                    return response.data
                } else {
                    console.error('Error fetching user information');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }

        if (token) {
            getUserInfo();
        }
    }, [token]);

    useEffect(() => {
        if (!loading) {
            console.log('finally');
        }
    }, [loading]);

    console.log("User info: ", userInfo);
    console.log(GetUserInfo())

    // Aquí iría el renderizado de tu componente
    return (
        <div>
            {loading ? <p>Loading...</p> : <p>User Info: {JSON.stringify(userInfo)}</p>}
        </div>
    );
};

