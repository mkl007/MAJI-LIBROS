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

export const InputUI = ({ autoComplete, disabled, id, name, onChange, placeholder, required, type }: InputsStyleInterface) => {
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
                className={' w-full border border-gray-300 rounded-md px-2 pt-2 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'}
            />
        </div>
    )
}