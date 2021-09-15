import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import defaultAvatar from "../../assets/default_avatar.jpeg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.CARD_ACCENT};
  }
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
  align-items: center;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-image: ${({ imageUrl }) => `url("${imageUrl ? imageUrl : defaultAvatar}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Name = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  color: ${({ theme }) => theme.TEXT};
  margin-bottom: 3px;
`;

export const Info = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.SMALL};
  color: ${({ theme }) => theme.TEXT_LIGHT};
`;

export const Online = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.ONLINE_GREEN};
  margin-left: 10px;
`;
