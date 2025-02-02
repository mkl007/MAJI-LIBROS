
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";


export const GithubButton = () => {
    const { setIsLoading } = useAuth()

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsLoading(true)
        window.location.href = `http://localhost:3000/api/v1/auth/github/`
    };
    return (
        <div>
            <button
                onClick={handleLogin}
                className="flex items-center justify-center w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition duration-200">
                <FaGithub className="mr-2" />
                GitHub
            </button>
        </div>
    );
}

