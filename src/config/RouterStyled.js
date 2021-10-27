import styled from "styled-components";
import SCREEN from "../constants/screen";

export const SidenavWrapper = styled.div`
  margin-right: 25px;
  margin-top: 95px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin: 0;
    width: 100vw;
    position: fixed;
    bottom: 0;
    height: calc(100vh - 80px);
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const ContentWrapper = styled.div`
  width: 780px;
  margin-top: 80px;

  @media (max-width: ${SCREEN.SIZES.TABLET}) {
    width: max-content;
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 100%;
  }
`;
