import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  letter-spacing: 2px;
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  align-items: center;
  justify-content: center;
  width: ${({ isSmall }) => (isSmall ? "max-content" : "unset")};
  border: ${({ theme }) => `2px solid ${theme.CARD}`};
  background-color: ${({ theme, isOutlined, color, isAlwaysColored, isDisabled }) => {
    if (isDisabled) return theme.CARD;
    if (isAlwaysColored) return color || theme.ACCENT;
    if (isOutlined) return theme.CARD;
    return theme.CARD;
  }};
  color: ${({ theme, isOutlined, isAlwaysColored, isDisabled }) => {
    if (isDisabled) return theme.TEXT_LIGHT;
    if (isAlwaysColored) return theme.CARD;
    if (isOutlined) return theme.TEXT;
    return theme.TEXT;
  }};

  &:hover {
    background-color: ${({ theme, isDisabled, color, isOutlined, isAlwaysColored }) => {
      if (isDisabled) return theme.CARD;
      if (isAlwaysColored) return color || theme.ACCENT;
      if (isOutlined) return theme.CARD;
      return color || theme.ACCENT;
    }};
    color: ${({ theme, isDisabled, isOutlined, isAlwaysColored }) => {
      if (isDisabled) return theme.TEXT_LIGHT;
      if (isAlwaysColored) return theme.CARD;
      if (isOutlined) return theme.TEXT;
      return theme.CARD;
    }};
    border: ${({ theme, isOutlined }) => `2px solid ${isOutlined ? theme.TEXT : theme.CARD}`};
    transform: ${({ isDisabled }) => (isDisabled ? "translateY(0px)" : "translateY(-2px)")};
  }

  &:active {
    transform: translateY(0px);
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;
