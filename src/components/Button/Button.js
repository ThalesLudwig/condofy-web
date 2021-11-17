import React from "react";
import PropTypes from "prop-types";
import { Container } from "./ButtonStyled";

export const Button = ({ text, onPress }) => {
  return <Container onClick={onPress}>{text.toUpperCase()}</Container>;
};

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "",
};
