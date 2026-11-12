type InputFieldProps = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
};

function InputField({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
  placeholder,
  disabled,
  required,
}: InputFieldProps) {
  return (
    <label className="flex flex-col gap-1" htmlFor={id}>
      {label}
      <input
        autoComplete={autoComplete}
        className="border-line rounded border px-3 py-2"
        disabled={disabled}
        id={id}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </label>
  );
}

export default InputField;
