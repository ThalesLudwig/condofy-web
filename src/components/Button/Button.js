import React from "react";
import PropTypes from "prop-types";
import { Container, IconWrapper } from "./ButtonStyled";

export const Button = ({ text, onPress, isDisabled, isSmall, isOutlined, isAlwaysColored, color, icon: Icon }) => {
  return (
    <Container
      isSmall={isSmall}
      isDisabled={isDisabled}
      isOutlined={isOutlined}
      color={color}
      isAlwaysColored={isAlwaysColored}
      onClick={isDisabled ? () => {} : onPress}>
      {Icon && (
        <IconWrapper>
          <Icon size={20} />
        </IconWrapper>
      )}
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
