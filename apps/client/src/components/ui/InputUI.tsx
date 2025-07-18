interface InputsStyleInterface {
    id: string
    name: string
    type: string
    autoComplete: string
    required: boolean
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    disabled?: boolean
    className?: string
}

export const InputUI = ({ autoComplete, disabled, id, name, onChange, placeholder, required, type, className }: InputsStyleInterface) => {
    return (
        <div className="pt-2">
            <input
                id={id}
                autoComplete={autoComplete}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                type={type}
                disabled={disabled}
                className={className || "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"}
            />
        </div>
    )
}