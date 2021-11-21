import styled from "styled-components";
import deleteSvg from "./assets/delete.svg";
import TYPOGRAPHY from "../../constants/typography";
import SCREEN from "../../constants/screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 450px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 80vw;
    height: 80vh;
  }
`;

export const Image = styled.img.attrs({
  src: deleteSvg,
})`
  width: 170px;
  height: 170px;
`;

export const Title = styled.div`
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  font-size: ${TYPOGRAPHY.SIZES.TITLE};
  color: ${({ theme }) => theme.TEXT};
  margin-bottom: 10px;
`;

export const Text = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT_LIGHT};
  margin-bottom: 50px;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 275px;
  }
`;
