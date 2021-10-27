import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import SCREEN from "../../constants/screen";
import avatarMock from "../../assets/avatarmock.jpg";
import { NavLink } from "react-router-dom";
import SHADOWS from "../../constants/shadows";

export const SidenavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 115px);
  width: 256px;
  padding: 0px 0px 20px 0px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    justify-content: flex-start;
    padding: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    width: ${({ isOpen }) => (isOpen ? "80vw" : "0")};
    height: 100%;
    background-color: ${({ theme }) => theme.CARD};
    -webkit-box-shadow: ${SHADOWS.BOX.CARD};
    box-shadow: ${SHADOWS.BOX.CARD};
  }
`;

export const TopContainer = styled.div`
  background-color: ${({ theme }) => theme.CARD};
  padding: 20px 0px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    border-radius: 0;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin: 0;
  }
`;

export const AvatarContainer = styled.div`
  background-color: ${({ theme }) => theme.CARD};
  padding: 15px;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  cursor: pointer;
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: none;
  }
`;

export const BottomActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    flex-direction: column;
    margin: 0;
  }
`;

export const BottomAction = styled(NavLink)`
  background-color: ${({ theme }) => theme.CARD};
  color: ${({ theme }) => theme.TEXT_LIGHT};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 15px;
  cursor: pointer;
  box-sizing: border-box;
  width: 120px;
  height: 90px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  text-decoration: none;
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};

  &:hover {
    color: ${({ theme }) => theme.ACCENT};
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 100%;
    height: 55px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-left: 3px solid ${({ theme }) => theme.CARD};
    padding-left: 20px;
  }
`;

export const BottomActionText = styled.div`
  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    padding-left: 20px;
  }
`;

export const Avatar = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
  background-image: ${`url("${avatarMock}")`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  border-radius: 10px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 55px;
    height: 55px;
  }
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  justify-content: space-between;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: none;
  }
`;

export const Name = styled.div`
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
`;

export const Info = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  color: ${({ theme }) => theme.TEXT_LIGHT};
`;

export const Divisor = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.BACKGROUND};
  width: 100%;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: none;
  }
`;

export const LinkText = styled.div`
  padding-left: 20px;
`;

export const Link = styled(NavLink).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.ACCENT,
    fontWeight: 500,
    borderLeft: `3px solid ${theme.ACCENT}`,
  },
  exact: true,
}))`
  color: ${({ theme }) => theme.TEXT_LIGHT};
  text-decoration: none;
  padding: 13px 0px;
  padding-left: 20px;
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  align-items: center;
  display: flex;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  border-left: 3px solid ${({ theme }) => theme.CARD};

  &:hover {
    color: ${({ theme }) => theme.TEXT};
    background-color: ${({ theme }) => theme.BACKGROUND};
  }
`;
