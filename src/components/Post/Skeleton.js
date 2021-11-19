import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { withTheme } from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Container,
  Header,
  HeaderContent,
  InfoWrapper,
  Content,
  InteractionsRow,
  InteractionSkeleton,
} from "./PostStyled";

const PostSkeleton = ({ theme }) => {
  return (
    <SkeletonTheme baseColor={theme.SKELETON} highlightColor={theme.CARD}>
      <Container>
        <Header>
          <HeaderContent>
            <Skeleton width={48} height={48} count={1} borderRadius={10} />
            <InfoWrapper>
              <Skeleton width={200} count={1} />
              <Skeleton width={100} count={1} />
            </InfoWrapper>
          </HeaderContent>
        </Header>
        <Content>
          <Skeleton count={5} />
        </Content>
        <InteractionsRow>
          <InteractionSkeleton>
            <Skeleton width={25} height={25} count={1} />
          </InteractionSkeleton>
          <InteractionSkeleton>
            <Skeleton width={25} height={25} count={1} />
          </InteractionSkeleton>
        </InteractionsRow>
      </Container>
    </SkeletonTheme>
  );
};

export default withTheme(PostSkeleton);
