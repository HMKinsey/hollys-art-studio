import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type CaptionProps = HTMLAttributes<HTMLSpanElement>;

export function Caption({ children, className, ...props }: CaptionProps) {
  return (
    <span
      className={cn(
        'text-text-muted font-sans text-xs tracking-wider uppercase',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
