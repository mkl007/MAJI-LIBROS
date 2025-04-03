import { FaGithub } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export const GithubButton = () => {
    const { setIsLoading } = useAuth()
    const apiUrl = import.meta.env.VITE_API_URL

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            // const res = instanceAxios.get('/auth/github/')
            window.location.href = `${apiUrl}/auth/github/`

            // console.log(res)
        } catch (error) {
            console.log(error)
        }

        // window.location.href = `${apiUrl}/auth/github/`

    };
    return (
        <>
            <button
                onClick={handleLogin}
                className="flex items-center justify-center w-full bg-gray-800
                 text-white px-2 py-2 rounded-md hover:bg-gray-900 transition 
                 duration-200 md:w-2/4">
                <FaGithub className="icon" />

                <span className="lg:text-md">GitHub</span>

            </button>
        </>
    );
}

