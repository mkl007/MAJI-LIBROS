import { ReactNode, useState } from "react"
import { AuthContext } from "./Auth.context"
import { ApiResponse, UserToLogin, UserToSignUp } from "../interfaces/User.interface"
import { AxiosResponse } from "axios"
import instanceAxios from "../api/axiosSetup"
import { useNavigate } from "react-router-dom"


export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<ApiResponse | null>(null);


    const signUpFunction = async (user: UserToSignUp) => {
        try {
            const response: AxiosResponse<ApiResponse> = await instanceAxios.post<ApiResponse>('/register', user);
            setData(response.data);
            setIsLoading(true)
        } catch (error) {
            console.error('Error while creating user:', error);
            setData(null);
        }
    };

    const loginFunction = async (user: UserToLogin) => {
        try {
            const response: AxiosResponse<ApiResponse> = await instanceAxios.post<ApiResponse>('/login', user);
            setData(response.data);
            setIsLoading(true)
            if (response?.data?.message === 'Logged in') {
                document.cookie = `token=${response.data.token}; SameSite=None; Secure`;                
            }
        } catch (error) {
            console.error('Error Logging into the account:', error);
            setData(null);
        }
    };


    return (
        <AuthContext.Provider value={{ data, signUpFunction, isLoading, setIsLoading, loginFunction }}>
            {children}
        </AuthContext.Provider>
    )
}
