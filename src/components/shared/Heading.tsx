import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type HeadingLevel = 'h1' | 'h2' | 'h3';
type HeadingVariant = 'display' | 'sans';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingLevel;
  variant?: HeadingVariant;
};

const headingClasses: Record<HeadingLevel, string> = {
  h1: 'text-4xl leading-tight font-bold md:text-5xl',
  h2: 'text-2xl leading-tight font-semibold md:text-3xl',
  h3: 'text-lg leading-snug font-medium',
};

export function Heading({
  as: Component = 'h2',
  variant = Component === 'h3' ? 'sans' : 'display',
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        'text-text-primary tracking-tight',
        variant === 'display' ? 'font-display' : 'font-sans',
        headingClasses[Component],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
