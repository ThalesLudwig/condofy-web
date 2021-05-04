import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.BACKGROUND};
    margin: 0px;
    font-weight: 300;
    font-family: "Inter", sans-serif;
  }
`;
