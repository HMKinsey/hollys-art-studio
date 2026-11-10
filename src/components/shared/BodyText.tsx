import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type BodyTextProps = HTMLAttributes<HTMLParagraphElement>

export function BodyText({ children, className, ...props }: BodyTextProps) {
  return (
    <p
      className={cn(
        'font-sans text-base leading-relaxed text-text-secondary',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
