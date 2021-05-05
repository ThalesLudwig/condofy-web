import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./AppStyled";
import Router from "../../config/Router";
import { THEME_INDEX } from "../../constants/theme";

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={THEME_INDEX[theme]}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.value,
});

export default connect(mapStateToProps)(App);
