import styled from "styled-components";
import SHADOWS from "../../constants/shadows";
import ELEVATION from "../../constants/elevation";

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  position: absolute;
  top: inherit;
  bottom: inherit;
  right: -7px;
  background: ${({ theme }) => theme.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};
  border: solid 0.5px ${({ theme }) => theme.CARD_ACCENT};
  border-radius: 5px;
  width: max-content;
  z-index: ${ELEVATION.POPUP};
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;
