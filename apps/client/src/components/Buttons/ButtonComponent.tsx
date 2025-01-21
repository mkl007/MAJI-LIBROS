
interface ButtonComponentProps {
    onClick: () => void;
    text: string;
    type: "button" | "submit" | "reset";
    className?: string;
}
export const ButtonComponent = ({ onClick, text, type, className = "bg-red-500 text-white ml-3 px-2 py-2 rounded" }: ButtonComponentProps) => {
    return (
        <div>
            <button
                onClick={() => onClick()}
                className={className}
                type={type}
            >
                {text}
            </button>
        </div>
    )
}
