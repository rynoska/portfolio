export const typography = {
  fonts: {
    handwriting: "var(--font-handwriting)",
    sans: "var(--font-brandongrotesque)",
    sansGeist: "var(--font-geist-sans)",
    serif: "var(--font-serif)",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    script: "var(--font-scriptin)",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "3xl": "1.875rem",
  },
  fontWeights: {
    medium: 500,
    semibold: 600,
  },
  lineHeights: {
    tight: "1",
    body: "1.85rem",
    heading: "2.5rem",
  },
  letterSpacings: {
    tight: "-0.025em",
  },
} as const;
