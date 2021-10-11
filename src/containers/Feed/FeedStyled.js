import styled from "styled-components";
import SCREEN from "../../constants/screen";
import SHADOWS from "../../constants/shadows";

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${SCREEN.SIZES.TABLET}) {
    width: max-content;
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: unset;
  }
`;

export const PostsLane = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  overflow-y: auto;
  height: calc(100vh - 110px);
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 15px 0px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: calc(100vw - 100px);
  }
`;

export const MessagesLane = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-left: 25px;
  padding: 20px 0px;

  @media (max-width: ${SCREEN.SIZES.TABLET}) {
    display: none;
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 15px;
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};
  background-color: ${({ theme }) => theme.CARD};
`;
