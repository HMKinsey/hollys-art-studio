import { cn } from '../../../lib/cn';
import { labelVariants } from '../Label/labelVariants';
import { inputVariants } from './inputVariants';

type InputProps = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  className?: string | undefined;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
};

function Input({
  id,
  label,
  type,
  value,
  className,
  onChange,
  autoComplete,
  placeholder,
  disabled,
  required,
}: InputProps) {
  return (
    <label className={cn(labelVariants, className)} htmlFor={id}>
      {label}
      <input
        autoComplete={autoComplete}
        className={cn(inputVariants(), className)}
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

export default Input;
