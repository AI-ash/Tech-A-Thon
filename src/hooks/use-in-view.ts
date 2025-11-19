"use client";

import { useEffect, useState, RefObject } from 'react';

type IntersectionObserverOptions = {
  once?: boolean;
  margin?: string;
};

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const { once = false, margin = "0px" } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else {
            if (!once) {
                setIsInView(false);
            }
        }
      },
      { rootMargin: margin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, once, margin]);

  return isInView;
}
