
interface ButtonComponentProps {
    onClick: () => void;
    text: string;
    type: "button" | "submit" | "reset";
}
export const ButtonComponent = ({ onClick, text, type }: ButtonComponentProps) => {
    return (
        <div>
            <button
                onClick={() => onClick()}
                className="bg-red-500 text-white ml-3 px-2 py-2 rounded"
                type={type}
            >
                {text}
            </button>
        </div>
    )
}
