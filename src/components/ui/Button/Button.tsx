import type { VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../lib/cn';
import { buttonVariants } from './buttonVariants';

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ariaLabel?: string;
  buttonText?: ReactNode;
}

function Button({
  ariaLabel,
  className,
  size,
  type = 'button',
  buttonText,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      className={cn(buttonVariants({ size }), className)}
      type={type}
    >
      {children ?? buttonText ?? 'Button'}
    </button>
  );
}

export default Button;
