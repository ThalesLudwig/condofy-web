import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import SCREEN from "../../constants/screen";
import SHADOWS from "../../constants/shadows";
import TYPOGRAPHY from "../../constants/typography";
import { FEED_WIDTH } from "../../constants/feed";

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

export const BackRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin-top: 10px;
  }
`;

export const BackText = styled.div`
  color: ${({ theme }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZES.TEXT};
  font-weight: ${TYPOGRAPHY.WEIGHT.STRONG};
  margin-left: 10px;
`;

export const PostsLane = styled.div`
  display: flex;
  flex-direction: column;
  width: ${FEED_WIDTH};
  overflow-y: auto;
  height: calc(100vh - 110px);
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 15px 0px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    width: 100vw;
    padding: 0;
    height: calc(100vh - 85px);
  }
`;

export const MessagesLane = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 25px;
  padding: 20px 0px;

  @media (max-width: ${SCREEN.SIZES.TABLET}) {
    display: none;
  }
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px;
  -webkit-box-shadow: ${SHADOWS.BOX.CARD};
  box-shadow: ${SHADOWS.BOX.CARD};
  background-color: ${({ theme }) => theme.CARD};
`;

export const BackArrow = styled(FiArrowLeft).attrs(({ theme }) => ({
  size: 20,
  color: theme.TEXT,
}))``;
