import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./AppStyled";
import Router from "../../config/Router";
import THEME from "../../constants/theme";

const App = () => {
  return (
    <ThemeProvider theme={THEME.LIGHT}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
