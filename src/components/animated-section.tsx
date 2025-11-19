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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={cn(
        "transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
        isInView ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
