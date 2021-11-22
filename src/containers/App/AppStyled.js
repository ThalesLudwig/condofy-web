import styled, { createGlobalStyle } from "styled-components";
import THEME from "../../constants/theme";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.BACKGROUND};
    margin: 0px;
    font-weight: 300;
    font-family: "Inter", sans-serif;
  }
  :root {
    --toastify-color-light: ${THEME.LIGHT.BACKGROUND};
    --toastify-color-dark: ${THEME.DARK.BACKGROUND};
    --toastify-color-info: ${({ theme }) => theme.ACCENT};
    --toastify-color-success: ${({ theme }) => theme.ONLINE_GREEN};
    --toastify-color-warning: #f1c40f;
    --toastify-color-error: ${({ theme }) => theme.LIKE_RED};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
