import { FaGoogle } from "react-icons/fa"


export const GoogleButton = () => {
    return (
        <div>
            <button className="flex  items-center w-full mt-3 justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-red-600 text-white  hover:bg-red-700 transition duration-200">
                <FaGoogle className="mr-2" />
                Google
            </button>
        </div>
    )
}
