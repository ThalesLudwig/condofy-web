import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import SCREEN from "../../constants/screen";
import defaultAvatar from "../../assets/default_avatar.jpeg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.CARD};
  margin-bottom: 25px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin-bottom: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZES.SMALL};
  }
`;

export const Avatar = styled.div`
  min-width: 48px;
  height: 48px;
  border-radius: 10px;
  background-image: ${({ avatarUrl }) => `url("${avatarUrl ? avatarUrl : defaultAvatar}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  justify-content: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Name = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
  margin-bottom: 3px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    font-size: ${TYPOGRAPHY.SIZES.SMALL};
  }
`;

export const Info = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  color: ${({ theme }) => theme.TEXT_LIGHT};
  margin-left: 10px;
`;

export const DateTime = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  color: ${({ theme }) => theme.TEXT_LIGHT};
  margin-top: 3px;
`;

export const InteractionsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
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
