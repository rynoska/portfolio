/// <reference types="@emotion/react/types/css-prop" />

import "@emotion/react";
import type { AppTheme } from "./app/src/theme/theme";

declare module "@emotion/react" {
  export interface Theme extends AppTheme {
    __appThemeBrand?: never;
  }
}
