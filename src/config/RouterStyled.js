import styled from "styled-components";
import SCREEN from "../constants/screen";
import ELEVATION from "../constants/elevation";

export const SidenavWrapper = styled.div`
  margin-right: 25px;
  margin-top: 95px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin: 0;
    width: 100vw;
    position: fixed;
    bottom: 0;
    top: 80px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: ${ELEVATION.NAVIGATION};
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
