import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth"
import { useGetToken } from "../hooks/useGetToken";

export const Settings = () => {
    const { data, getUserInfo, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn } = useAuth()
    const token = useGetToken();
    useEffect(() => {
        if (token != null) {
            setIsLoading(true);


            getUserInfo(token).then(() => {
                setIsLoading(false);
            });
        }
    }, [token]);

    useEffect(() => {
        if (isLoggedIn) console.log('from Settings', isLoggedIn)

    })

    return (
        <div>Settings</div>
    )
}

