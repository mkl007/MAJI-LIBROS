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
    const [user, setUser] = useState<UserData | undefined>(undefined)



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
                setIsLoading(true)
                if (response.data.userInfo) {
                    setUser(response.data);
                    setIsLoggedIn(true)
                    setIsLoading(false)
                } else {
                    setError(response.data);
                    setIsLoading(false)
                    setIsLoggedIn(false)
                }
            } catch (error) {
                setError('Error: ' + error);
                setIsLoading(false)
            }
        };
        getUserInfo()

    }, [isLoading]);

    useEffect(() => {
        if (error) {
            console.log(error)
        }
    }, [user])

    return (
        <AuthContext.Provider value={{ data, signUpFunction, isLoading, setIsLoading, loginFunction, isLoggedIn, setIsLoggedIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}
