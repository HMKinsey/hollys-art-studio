import { cva } from 'class-variance-authority';
import type { FormHTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const formVariants = cva(
  'bg-paper mx-auto flex w-full max-w-sm flex-col gap-4 rounded-lg p-6 shadow'
);

function Form({ children, className, ...props }: FormProps) {
  return (
    <form {...props} className={cn(formVariants(), className)}>
      {children}
    </form>
  );
}

export default Form;
