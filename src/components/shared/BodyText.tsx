import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type BodyTextProps = HTMLAttributes<HTMLParagraphElement>;

export function BodyText({ children, className, ...props }: BodyTextProps) {
  return (
    <p
      className={cn(
        'text-text-secondary font-sans text-base leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
