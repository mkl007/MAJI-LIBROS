
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


            <div className="flex flex-col space-y-4">
                <button className="flex  items-center w-full mt-3 justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-red-600 text-white  hover:bg-red-700 transition duration-200">
                    <FaGoogle className="mr-2" />
                    Google
                </button>
                <button
                    onClick={handleLogin}
                    className="flex items-center justify-center w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition duration-200">
                    <FaGithub className="mr-2" />
                    GitHub
                </button>
            </div>
        </div>
    );
}
