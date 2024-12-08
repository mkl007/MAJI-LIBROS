import { ReactNode, useEffect, useState } from "react"
import { AuthContext } from "./Auth.context"
import { ApiResponse, UserData, UserToLogin, UserToSignUp } from "../interfaces/User.interface"
import { AxiosResponse } from "axios"
import instanceAxios from "../api/axiosSetup"


export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<ApiResponse | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<UserData | null>(null)



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

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response: AxiosResponse = await instanceAxios.get(`/userData`)
                if (response.data.userInfo) {
                    setUser(response.data.userInfo);
                    setIsLoggedIn(true)
                } else {
                    setError(response.data);
                }
            } catch (error) {
                setError('Error: ' + error);
            }
        };
        getUserInfo()
    }, []);


    useEffect(() => {
        if (user) {
            console.log(user)
        }
    }, [user])

    useEffect(() => {
        if(error) {
            console.log(error)
        }
    })


    return (
        <AuthContext.Provider value={{ data, signUpFunction, isLoading, setIsLoading, loginFunction, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
