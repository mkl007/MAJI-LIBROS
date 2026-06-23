import { INPUT_STYLES } from './formStyles.constant';

interface FormFieldProps {
  id: string;
  label?: string;
  type: string;
  value: string;
  error?: string;
  disabled: boolean;
  placeholder: string;
  onChange: (value: string) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  type,
  value,
  error,
  disabled,
  placeholder,
  onChange,
}) => (
  <div className="relative mt-2">
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      className={`${INPUT_STYLES.base} ${
        disabled ? INPUT_STYLES.disabled : INPUT_STYLES.enabled
      } ${error ? 'border-red-500' : ''}`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
