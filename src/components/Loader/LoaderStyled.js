import styled from "styled-components";
import spinner from "../../assets/spinner.svg";

export const Container = styled.div`
  display: ${({ isLoading }) => (isLoading ? "block" : "none")};
`;

export const Spinner = styled.img.attrs({
  src: spinner,
})`
  width: 45px;
  height: 45px;
`;
