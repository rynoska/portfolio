import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { typography } from "./typography";

export { breakpoints } from "./breakpoints";
export { colors } from "./colors";
export { typography } from "./typography";

export const theme = {
  breakpoints,
  colors,
  typography,
} as const;

export type AppTheme = typeof theme;
