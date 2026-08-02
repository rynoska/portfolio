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
  rootMargin = "0px 0px -10px 0px",
  wrapperCss,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

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
  }, [prefersReducedMotion, threshold, rootMargin, root]);

  const shouldAnimate = !prefersReducedMotion;
  const isShown = isVisible || prefersReducedMotion;

  return (
    <div
      ref={ref}
      css={[
        wrapperCss,
        css`
          opacity: ${isShown ? 1 : 0};
          transform: ${isShown || !shouldAnimate ? "translateY(0)" : "translateY(1rem)"};
          transition: ${shouldAnimate
            ? `opacity 0.6s ease-in-out ${delay}ms, transform 0.6s ease-in-out ${delay}ms`
            : "none"};
        `,
      ]}
    >
      {children}
    </div>
  );
}
