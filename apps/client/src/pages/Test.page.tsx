import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AxiosResponse } from 'axios';
import instanceAxios from '../api/axiosSetup';
import { useUser } from '../hooks/useUser';

// Definir la interfaz para los datos de la API
export interface ApiResponse {
    message: string;
}

// Definir la interfaz para el contexto
export interface UserContextType {
    data: ApiResponse | null;
    fetchData: () => Promise<void>;
}



// Puedo hacer que data sea de varios tipos /// Tambien puedo usar el fetchData como un Custom hook

// Crear el contexto con un valor predeterminado
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Crear un proveedor para el contexto
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<ApiResponse | null>(null);

    const fetchData = async () => {
        try {
            const response: AxiosResponse<ApiResponse> = await instanceAxios.get<ApiResponse>('/userdatatest');
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching user data:', error);
            setData(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <UserContext.Provider value={{ data, fetchData }}>
            {children}
        </UserContext.Provider>
    );
};





export const TestPage: React.FC = () => {
    const { data, fetchData } = useUser();

    return (
        <div>
            <h1>Test Page</h1>
            {data ? (
                <div>
                    <p>Message: {data.message}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={fetchData}>Refetch Data</button>
        </div>
    );
};








////////////////////////////
// import { AxiosResponse } from "axios"
// import instanceAxios from "../api/axiosSetup"

// interface ApiResponse {
//     message: string
// }

// export const TestPage = () => {
//     async function fetchTesting(): Promise<ApiResponse | null> {
//         const response: AxiosResponse<ApiResponse> = await instanceAxios.get<ApiResponse>('/userdatatest')
//         console.log(response.data)
//         return response.data
//     }
//     fetchTesting()
//     return (
//         <div>
//             Testpage
//         </div>
//     )
// }
