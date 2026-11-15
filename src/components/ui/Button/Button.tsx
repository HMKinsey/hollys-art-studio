import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../lib/cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded bg-rose font-semibold text-white hover:bg-rose-dark',
  {
    variants: {
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-12 px-5 text-base',
        lg: 'h-16 px-8 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

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
