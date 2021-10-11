import styled from "styled-components";
import SCREEN from "../constants/screen";

export const SidenavWrapper = styled.div`
  margin-right: 25px;
  margin-top: 95px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin-right: 15px;
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
