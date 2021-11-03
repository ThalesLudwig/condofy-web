import styled from "styled-components";

export const Hoverable = styled.div`
  display: flex;
  width: max-content;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  border-radius: 8px;
  padding: 5px 7px;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.CARD_ACCENT};
  }
`;
