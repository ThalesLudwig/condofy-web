import React from "react";
import PropTypes from "prop-types";
import { Container } from "./ButtonStyled";

export const Button = ({ text, onPress, isDisabled, isSmall }) => {
  return (
    <Container isSmall={isSmall} isDisabled={isDisabled} onClick={isDisabled ? () => {} : onPress}>
      {text.toUpperCase()}
    </Container>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "",
};
