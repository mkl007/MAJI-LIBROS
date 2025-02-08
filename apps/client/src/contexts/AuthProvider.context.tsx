import { ReactNode, useEffect, useState } from "react"
import { AuthContext } from "./Auth.context"
import { ApiResponse, UserData, UserToLogin, UserToSignUp } from "../interfaces/User.interface"
import { AxiosResponse } from "axios"
import instanceAxios from "../services/axiosSetup"
import { useGetToken } from "../hooks/useGetToken"


export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<ApiResponse | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<UserData | undefined>(undefined)
    const [authToken, setAuthToken] = useState<string | null>(null)


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

    const googleSignIn = async () => {
        // const response: AxiosResponse<ApiResponse> = await instanceAxios.get<ApiResponse>('/',);
        setIsLoading(true)
        console.log('Clicked!')
        // window.location.href = `http://localhost:3000/api/v1/auth/google`;
        window.location.href = `https://maji-libros.onrender.com/api/v1/auth/google`;
        // https://maji-libros.onrender.com/api/v1/
        // useGetToken()
        setIsLoggedIn(true)
    }

    const loginFunction = async (user: UserToLogin) => {
        try {
            const response: AxiosResponse<ApiResponse> = await instanceAxios.post<ApiResponse>('/login', user);
            setData(response.data);
            setIsLoading(true)
            if (response?.data?.message === 'Logged in') {
                setIsLoggedIn(true)
                setIsLoading(false)
            }
        } catch (err) {
            console.log('Error Logging into the account:', err);
            setData(null);
            // setError(err)
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
                    console.log('Got the user info', response.data.userInfo)

                }
                else {
                    setError(response.data);
                    setIsLoading(false)
                    console.log('Else Error: ', response.data)


                }
            } catch (error) {
                setError('Error: ' + error);
                console.log('Error: ', error)
                setIsLoading(false)
                setIsLoggedIn(false)
            }
        };
        getUserInfo()

    }, [isLoading, data]);

    useEffect(() => {
        if (user) console.log('There is user')

    })

    useEffect(() => {
        if (error) {
            console.log(error)
            setIsLoggedIn(false)
        }
    }, [data])

    return (
        <AuthContext.Provider value={{ data, signUpFunction, isLoading, setIsLoading, loginFunction, isLoggedIn, setIsLoggedIn, user, googleSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}
