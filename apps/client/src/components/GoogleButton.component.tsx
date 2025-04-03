import { FaGoogle } from "react-icons/fa"
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"
import { useGetToken } from "../hooks/useGetToken"


export const GoogleButton = () => {
    const { googleSignIn } = useAuth()

    useEffect(() => {
        useGetToken(window.document.cookie)
        // ir al backend a obtener la information del usuario a travez del token. 
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        googleSignIn();

    }
    return (
        <>
            <button
                onClick={handleClick}
                className="flex items-center justify-center w-full bg-red-600
                 text-white px-2 py-2 rounded-md hover:bg-red-700 transition 
                 duration-200 md:w-2/4">
                <FaGoogle className="icon" />
                <span className="lg:text-md">Google</span>
            </button>
        </>
    )
}
