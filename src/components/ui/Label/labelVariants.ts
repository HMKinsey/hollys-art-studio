import { cva } from 'class-variance-authority';

export const labelVariants = cva('flex flex-col gap-1', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
});
