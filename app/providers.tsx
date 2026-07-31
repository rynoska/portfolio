"use client";

import { ReactNode } from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./src/theme/theme";
import { globalStyles } from "./global-styles";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}
