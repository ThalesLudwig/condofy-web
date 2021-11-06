import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import SCREEN from "../../constants/screen";
import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logo_dark.svg";
import SHADOWS from "../../constants/shadows";
import avatarMock from "../../assets/avatarmock.jpg";
import { FiSearch, FiBell, FiAlignJustify } from "react-icons/fi";
import { Hoverable } from "../Hoverable/Hoverable";

export const Container = styled.div`
  position: fixed;
  height: 80px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.CARD};
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${SCREEN.SIZES.TABLET}) {
    justify-content: center;
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 100%;
    padding: 0px 20px;
    justify-content: space-between;
  }
`;

export const Options = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 67px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin-right: 0px;
    width: max-content;
  }
`;

export const Notifications = styled(Hoverable)`
  padding: 10px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: none;
  }
`;

export const Search = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.CARD_ACCENT};
  border-radius: 11px;
  width: 456px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  @media (max-width: ${SCREEN.SIZES.TABLET}) {
    margin: 20px;
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 200px;
  }
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.CARD_ACCENT};
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.TEXT_LIGHT};
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  margin-left: 5px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.TEXT_LIGHT};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.TEXT_LIGHT};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.TEXT_LIGHT};
  }
`;

export const Avatar = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
  background-image: ${`url("${avatarMock}")`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
`;

// export const Logo = styled.img.attrs(({ activeTheme }) => ({ src: !!activeTheme ? logo : logoDark }))`
//   @media (max-width: ${SCREEN.SIZES.MOBILE}) {
//     display: none;
//   } ;
// `;

export const Logo = styled.div`
  color: ${({ theme }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: none;
  } ;
`;

export const MenuButton = styled(FiAlignJustify).attrs(({ theme }) => ({
  color: theme.ACCENT,
  size: 30,
}))`
  display: none;
  cursor: pointer;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    display: flex;
  }
`;

export const SearchIcon = styled(FiSearch).attrs(({ theme }) => ({
  color: theme.TEXT_LIGHT,
  size: 20,
}))``;

export const BellIcon = styled(FiBell).attrs(({ theme }) => ({
  color: theme.ACCENT,
  size: 20,
}))``;
