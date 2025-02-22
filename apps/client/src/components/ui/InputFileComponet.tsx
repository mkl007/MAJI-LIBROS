
// type="file"
// id="coverImage"
// name="coverImage"
// className="hidden"
// onChange={handleFileChange}
// accept="image/*"
// required


interface InputFileComponentProps {
    onChange: undefined
    text: string;
    type: "button" | "submit" | "reset";
    className?: string;
    name: string
    accept: string
    required: boolean

}


export const InputFileComponet = ({ accept, name, required, type, className }: InputFileComponentProps) => {
    return (
        <div>
            <input
                accept={accept}
                name={name}
                required={required}
                className={className}
                type={type}
                onChange={undefined}
            />
        </div>
    )
}
