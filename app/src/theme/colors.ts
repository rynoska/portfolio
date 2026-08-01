export const colors = {
  background: {
    page: "rgb(250 250 250)",
  },
  text: {
    primary: "rgb(151 190 189)",
    link: "rgb(232 244 244)",
    linkHover: "rgb(145 251 249)",
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
