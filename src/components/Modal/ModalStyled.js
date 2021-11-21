import styled from "styled-components";
import { FiX } from "react-icons/fi";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled(FiX).attrs(({ theme }) => ({
  size: 20,
  color: theme.TEXT,
}))``;
