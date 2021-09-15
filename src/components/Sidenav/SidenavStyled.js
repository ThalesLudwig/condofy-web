import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import SCREEN from "../../constants/screen";
import logo from "../../assets/logo.svg";
import logoMobile from "../../assets/logo_small.svg";
import avatarMock from "../../assets/avatarmock.jpg";
import { NavLink } from "react-router-dom";

export const SidenavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 40px);
  width: 256px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: max-content;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img.attrs({ src: logo })`
  width: 146px;
  display: flex;
  align-self: center;
  margin-bottom: 30px;

  @media (max-height: 700px) {
    display: none;
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: none;
  }
`;

export const LogoMobile = styled.img.attrs({ src: logoMobile })`
  display: none;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) and (min-height: 700px) {
    width: 45px;
    display: flex;
    align-self: center;
    margin-bottom: 30px;
  }
`;

export const TopContainer = styled.div`
  background-color: ${({ theme }) => theme.CARD};
  padding: 20px 0px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 55px;
    border-radius: 15px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarContainer = styled.div`
  background-color: ${({ theme }) => theme.CARD};
  padding: 15px;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: max-content;
    padding: 0px;
  }
`;

export const BottomActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    flex-direction: column;
  }
`;

export const BottomActionText = styled.div`
  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: none;
  }
`;

export const BottomAction = styled.div`
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

  &:hover {
    color: ${({ theme }) => theme.ACCENT};
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 55px;
    height: 55px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
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

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  border-left: ${({ theme, isActive }) => (isActive ? `${theme.ACCENT} 6px solid` : `${theme.CARD} 6px solid`)};
`;

export const LinkText = styled.div`
  padding-left: 20px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: none;
  }
`;

export const Link = styled(NavLink).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.ACCENT,
    fontWeight: 500,
  },
  exact: true,
}))`
  color: ${({ theme }) => theme.TEXT_LIGHT};
  text-decoration: none;
  padding: 13px 0px;
  margin-left: 20px;
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  align-items: center;
  display: flex;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.TEXT};
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin-left: 0px;
    justify-content: center;
    width: 100%;
  }
`;
