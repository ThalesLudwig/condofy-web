import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import SHADOWS from "../../constants/shadows";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.CARD};
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.BUTTON};
  transition: all 0.3s ease 0s;
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.TEXT};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  align-items: center;
  width: ${({ isSmall }) => (isSmall ? "max-content" : "unset")};

  &:hover {
    background-color: ${({ theme, isDisabled }) => (isDisabled ? theme.BACKGROUND : theme.SECONDARY)};
    color: ${({ theme, isDisabled }) => (isDisabled ? theme.TEXT_LIGHT : theme.CARD)};
    transform: ${({ isDisabled }) => (isDisabled ? "translateY(0px)" : "translateY(-2px)")};
  }

  &:active {
    transform: translateY(0px);
  }
`;
