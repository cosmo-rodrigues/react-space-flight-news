import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  body {
	overflow-y: scroll !important;
	overflow-x: hidden !important;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button, a {
    cursor: pointer;
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: 0.5s;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
