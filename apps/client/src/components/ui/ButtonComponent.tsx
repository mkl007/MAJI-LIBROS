import { FaBuysellads } from "react-icons/fa6";

interface ButtonComponentProps {
    onClick: () => void
    text: string;
    type: "button" | "submit" | "reset";
    className?: string;
    icon: JSX.Element;
}
// export const ButtonComponent = ({ onClick, text, type, className }: ButtonComponentProps) => {
//     return (
//         <div>
//             <button
//                 onClick={() => onClick()}
//                 className={`${className} text-white`}
//                 type={type}
//             >
//                 {text}
//             </button>
//         </div>
//     )
// }

export const ButtonComponent = ({ onClick, text, type, className, icon }: ButtonComponentProps) => {
    return (
        <>
            <button
                onClick={onClick}
                className={`${className} text-white `}
                type={type}
            >
                {icon}
                <span className="lg:text-md">{text}</span>

            </button>

        </>
    )

}



// `flex items-center justify-center w-full bg-gray-800
//                 text-white px-2 py-2 rounded-md hover:bg-gray-900 transition
//                 duration-200 md:w-2/4`