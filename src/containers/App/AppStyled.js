import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.BACKGROUND};
    margin: 0px;
    font-weight: 300;
    font-family: "Inter", sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
