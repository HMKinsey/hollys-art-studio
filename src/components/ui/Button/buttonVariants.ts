import { cva } from 'class-variance-authority';

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
