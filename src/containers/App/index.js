import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container } from "./AppStyled";
import Router from "../../config/Router";
import { THEME_INDEX } from "../../constants/theme";
import Modal from "react-modal";

const App = ({ theme }) => {
  Modal.setAppElement("#root");

  return (
    <ThemeProvider theme={THEME_INDEX[theme]}>
      <GlobalStyle />
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.value,
});

export default connect(mapStateToProps)(App);
