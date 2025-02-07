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
        <div>
            <button
                onClick={handleClick}
                className="flex  items-center w-full mt-3 px-2 py-2 justify-center rounded-md font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-red-600 text-white  hover:bg-red-700 transition duration-200 ">
                <FaGoogle className="icon" />
                <span className="text-sm lg:text-lg">Google</span>
            </button>
        </div>
    )
}
