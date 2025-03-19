
interface ButtonComponentProps {
    onClick: () => void 
    text: string;
    type: "button" | "submit" | "reset";
    className?: string;
} 
export const ButtonComponent = ({ onClick, text, type, className }: ButtonComponentProps) => {
    return (
        <div>
            <button
                onClick={() => onClick()}
                className={`${className} text-white rounded`}
                // className={`${className} text-white px-2 py-2 rounded`}
                type={type}
            >
                {text}
            </button>
        </div>
    )
}
