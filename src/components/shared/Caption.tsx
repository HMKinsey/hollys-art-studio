import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type CaptionProps = HTMLAttributes<HTMLSpanElement>

export function Caption({ children, className, ...props }: CaptionProps) {
  return (
    <span
      className={cn(
        'font-sans text-xs tracking-wider text-text-muted uppercase',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
