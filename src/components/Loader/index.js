import React from "react";
import PropTypes from "prop-types";
import { Container, Spinner } from "./LoaderStyled";

const Loader = ({ isLoading }) => (
  <Container isLoading={isLoading}>
    <Spinner />
  </Container>
);

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
