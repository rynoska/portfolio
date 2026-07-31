export const colors = {
  background: {
    page: "rgb(250 250 250)",
    surface: "rgb(255 255 255)",
    darkPage: "rgba(0, 0, 0, 0.55)",
    darkSurface: "rgba(0, 0, 0, 0.85)",
    subtleHover: "rgb(0 0 0 / 0.04)",
    darkSubtleHover: "#1a1a1a",
    inverseHover: "#383838",
    darkInverseHover: "#ccc",
  },
  text: {
    primary: "rgb(0 0 0)",
    secondary: "rgb(82 82 91)",
    strong: "rgb(9 9 11)",
    onInverse: "var(--background)",
    darkPrimary: "rgb(250 250 250)",
    darkSecondary: "rgb(234, 233, 233)",
    darkStrong: "rgb(250 250 250)",
    white: "rgb(255 255 255)",
  },
  border: {
    subtle: "rgb(0 0 0 / 0.08)",
    darkSubtle: "rgb(255 255 255 / 0.145)",
    token: "color-mix(in oklab, var(--foreground) 20%, transparent)",
  },
  token: {
    badgeBackground: "color-mix(in oklab, var(--background) 85%, var(--foreground) 15%)",
    badgeText: "var(--foreground)",
    primaryActionBackground: "var(--foreground)",
  },
} as const;
