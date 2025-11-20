"use client";

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function AnimatedSection({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-in-out motion-reduce:transition-none",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
