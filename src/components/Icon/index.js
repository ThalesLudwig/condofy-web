import React from "react";
import PropTypes from "prop-types";
import { IconWrapper } from "./IconStyled";

const Icon = ({ children, size, disabled, light, color }) => {
  return (
    <IconWrapper size={size} disabled={disabled} light={light} color={color}>
      {children}
    </IconWrapper>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "normal", "big", "huge"]),
  disabled: PropTypes.bool,
  light: PropTypes.bool,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: "normal",
  disabled: false,
  light: false,
};

export default Icon;
