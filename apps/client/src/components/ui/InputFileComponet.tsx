
// type="file"
// id="coverImage"
// name="coverImage"
// className="hidden"
// onChange={handleFileChange}
// accept="image/*"
// required


interface InputFileComponentProps {
    onChange: () => void;
    text: string;
    type: "button" | "submit" | "reset";
    className?: string;
    name: string
    accept: string
    required: boolean

}


export const InputFileComponet = ({ accept, name, onChange, required, text, type, className }: InputFileComponentProps) => {
    return (
        <div>

        </div>
    )
}
