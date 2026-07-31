import { css } from "@emotion/react";

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --background: rgb(5, 8, 11);
    --foreground: rgb(232, 244, 244);
  }

  /* @media (prefers-color-scheme: dark) {
    :root {
      --background: #0a0a0a;
      --foreground: #ededed;
    }
  } */

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (prefers-color-scheme: dark) {
    img[data-invert-on-dark="true"] {
      filter: invert(1);
    }
  }

  img {
    width: 100%;
    height: auto;
  }
  a {
    color: inherit;
    text-decoration: underline;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
