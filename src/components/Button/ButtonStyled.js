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
  margin-bottom: 15px;
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.BUTTON};
  transition: all 0.3s ease 0s;
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.TEXT};
  width: 100%;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.SECONDARY};
    box-shadow: 0px 6px 5px rgba(253, 126, 81, 0.4);
    color: ${({ theme }) => theme.CARD};
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(0px);
    -webkit-box-shadow: ${SHADOWS.BOX.CARD};
    box-shadow: ${SHADOWS.BOX.BUTTON};
  }
`;
