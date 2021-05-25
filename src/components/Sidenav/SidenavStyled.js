import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidenavWrapper = styled.div`
  background-color: ${({ theme }) => theme.CARD};
  padding: 20px 0px;
  border-radius: 20px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  border-left: ${({ theme, isActive}) => isActive ? `${theme.ACCENT} 3px solid` : `${theme.CARD} 3px solid`}; 
`;

export const Link = styled(NavLink).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.TEXT,
    fontWeight: 500,
  },
  exact: true,
}))`
  color: ${({ theme }) => theme.TEXT_LIGHT};
  text-decoration: none;
  padding: 13px 0px;
  margin-left: 20px;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.TEXT};
  }
`;
