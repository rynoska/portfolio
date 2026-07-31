"use client";

import { css, SerializedStyles } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  /** Fraction of the element that must be visible before triggering (0–1). Default: 0.1 */
  threshold?: number;
  /**
   * Shrinks/expands the viewport boundary before triggering.
   * A negative bottom value (e.g. "-100px 0px") means the element must scroll
   * further into view. Default: "0px 0px -80px 0px"
   */
  rootMargin?: string;
  root?: HTMLElement | null;
  /** Extra styles applied to the FadeIn wrapper div (e.g. flex/sizing props that must live on the flex child) */
  wrapperCss?: SerializedStyles;
}

export function FadeIn({
  children,
  root = null,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -80px 0px",
  wrapperCss,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin, root }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      css={[
        wrapperCss,
        css`
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? "translateY(0)" : "translateY(50px)"};
          transition:
            opacity 1s ease-in-out ${delay}ms,
            transform 0.8s ease-in-out ${delay}ms;
        `,
      ]}
    >
      {children}
    </div>
  );
}
