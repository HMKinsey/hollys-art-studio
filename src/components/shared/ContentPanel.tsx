import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ContentPanelProps {
  children: ReactNode;
  className?: string;
}

export function ContentPanel({ children, className }: ContentPanelProps) {
  return (
    <section className={cn('bg-paper rounded-3xl p-3 md:p-4', className)}>
      {children}
    </section>
  );
}
