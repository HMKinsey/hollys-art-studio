import type { FormHTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';
import { formVariants } from './formVariants';

type FormProps = FormHTMLAttributes<HTMLFormElement>;

function Form({ children, className, ...props }: FormProps) {
  return (
    <form {...props} className={cn(formVariants(), className)}>
      {children}
    </form>
  );
}

export default Form;
