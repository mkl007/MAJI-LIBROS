import { ReactNode, useCallback, useEffect, useState } from "react"
import { AuthContext } from "./Auth.context"
import { ApiResponse, UserToLogin, UserToSignUp } from "../interfaces/User.interface"
import axios, { AxiosResponse } from "axios"
import instanceAxios from "../api/axiosSetup"
import { useGetToken } from "../hooks/useGetToken"
import { LoadingSpinner } from "../utils/LoadingSnipper"


export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<ApiResponse | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);



    const signUpFunction = async (user: UserToSignUp) => {
        try {
            setIsLoading(true)
            const response: AxiosResponse<ApiResponse> = await instanceAxios.post<ApiResponse>('/register', user);
            setData(response.data);

        } catch (error) {
            console.error('Error while creating user:', error);
            setData(null);
        } finally {
            setIsLoading(false)
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
            setIsLoading(false)
        } catch (error) {
            console.error('Error Logging into the account:', error);
            setData(null);
        }
    };



    const getUserInfo = useCallback(async (token: string) => {
        try {
            const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(`http://localhost:3000/api/v1/userData/${token}`);
            if (response.data) {
                setData(response.data);
            } else {
                setError('Error fetching user information');
            }
        } catch (error) {
            setError('Error: ' + error);
        }
    }, []);

    const token = useGetToken();

    useEffect(() => {
        if (token != null) {
            setIsLoading(true);
            setError(null); // Clear previous errors

            getUserInfo(token)
                .then(() => {
                    setIsLoggedIn(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [token, getUserInfo]);

    if (isLoading) return <LoadingSpinner />;






    return (
        <AuthContext.Provider value={{ data, signUpFunction, isLoading, setIsLoading, loginFunction, getUserInfo, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
