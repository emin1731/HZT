"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  [key: string]: any;
}

export function ScrollSection({
  children,
  className = "",
  id,
  ...props
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-section-appearance");
          // Unobserve after animation triggers (only animate once)
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={className} id={id} {...props}>
      {children}
    </section>
  );
}
