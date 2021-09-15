import styled from "styled-components";
import TYPOGRAPHY from "../../constants/typography";
import SCREEN from "../../constants/screen";

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PostsLane = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  overflow-y: auto;
  height: calc(100vh - 50px);
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${SCREEN.SIZES.TABLET}) {
    width: calc(100vw - 380px);
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: calc(100vw - 100px);
  }
`;

export const MessagesLane = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-left: 70px;

  @media (max-width: ${SCREEN.SIZES.TABLET}) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: ${TYPOGRAPHY.SIZES.TITLE};
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  margin-bottom: 38px;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageWrapper = styled.div`
  margin-left: 10px;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
`;
