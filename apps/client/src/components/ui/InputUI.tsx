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
        <input
            id={id}
            autoComplete={autoComplete}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            type={type}
            disabled={disabled}
            className='h-10 px-3 text-base block rounded-md border-2 border-gray-300 py-1.5 text-gray-900 w-full shadow-sm placeholder-gray-500 focus:border-sky-900 '
        />
    )
}