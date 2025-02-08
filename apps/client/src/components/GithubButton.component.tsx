
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import instanceAxios from "../services/axiosSetup";


export const GithubButton = () => {
    const { setIsLoading } = useAuth()
    const apiUrl = import.meta.env.VITE_API_URL

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsLoading(true)
        console.log(`${apiUrl}/auth/github/`);

        window.location.href = `${apiUrl}/auth/github/`
        // window.location.href = `${instanceAxios.u}/auth/github/`
        // https://maji-libros.onrender.com/api/v1/
    };
    return (
        <div>
            <button
                onClick={handleLogin}
                className="flex items-center justify-center w-full bg-gray-800 text-white px-2 py-2 rounded-md hover:bg-gray-900 transition duration-200">
                <FaGithub className="icon" />

                <span className="lg:text-md">GitHub</span>

            </button>
        </div>
    );
}

