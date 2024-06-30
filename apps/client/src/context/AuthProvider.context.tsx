import { ReactNode, useState } from "react"
import { AuthContext } from "./Auth.context"
import { ApiResponse, UserToLogin, UserToSignUp } from "../interfaces/User.interface"
import axios, { AxiosResponse } from "axios"
import instanceAxios from "../api/axiosSetup"


export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<ApiResponse | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


    const signUpFunction = async (user: UserToSignUp) => {
        try {
            setIsLoading(true)
            const response: AxiosResponse<ApiResponse> = await instanceAxios.post<ApiResponse>('/register', user);
            setData(response.data);
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
            setIsLoggedIn(true)
        } catch (error) {
            console.error('Error Logging into the account:', error);
            setData(null);
        }
    };

    const getUserInfo = async (token: string) => {
        try {
            const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(`http://localhost:3000/api/v1/userData/${token}`);
            if (response.data) {
                setData(response.data);
                setIsLoggedIn(true)
            } else {
                console.error('Error fetching user information');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <AuthContext.Provider value={{ data, signUpFunction, isLoading, setIsLoading, loginFunction, getUserInfo, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
