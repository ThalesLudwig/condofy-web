import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container } from "./AppStyled";
import Router from "../../config/Router";
import { THEME_INDEX } from "../../constants/theme";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { THEME_ENUM } from "../../constants/theme";
import "react-toastify/dist/ReactToastify.css";

const App = ({ theme }) => {
  Modal.setAppElement("#root");

  return (
    <ThemeProvider theme={THEME_INDEX[theme]}>
      <GlobalStyle />
      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss={false}
        position="top-center"
        theme={theme === THEME_ENUM.LIGHT ? "light" : "dark"}
      />
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
