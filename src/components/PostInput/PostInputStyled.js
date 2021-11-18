import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import SCREEN from "../../constants/screen";
import SHADOWS from "../../constants/shadows";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.CARD};
  margin-bottom: 15px;
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};
  width: 100%;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin-bottom: 0;
    border-radius: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const Content = styled.textarea`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
  background-color: ${({ theme }) => theme.CARD};
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-style: none;
  resize: none;
  min-height: 50px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZES.SMALL};
  }
`;

export const Avatar = styled.div`
  min-width: 48px;
  height: 48px;
  border-radius: 10px;
  background-image: ${({ avatarUrl }) => `url("${avatarUrl}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AvatarDefault = styled.div`
  min-width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.ACCENT};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.BACKGROUND};
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
  margin-bottom: 3px;
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZES.SMALL};
  }
`;

export const Info = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  color: ${({ theme }) => theme.TEXT_LIGHT};
`;

export const InteractionsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-between;
`;

export const Interaction = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2px;
  height: 25px;
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
