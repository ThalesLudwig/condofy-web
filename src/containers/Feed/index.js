import React, { useState, useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { useIntl } from "react-intl";
import Message from "../../components/Message";
import Post from "../../components/Post";
import PostInput from "../../components/PostInput";
import avatarMock from "../../assets/avatarmock.jpg";
import Loader from "../../components/Loader";
import localization from "./localization";
import { useOnScreen } from "../../hooks/useOnScreen";
import { PAGE_SIZE } from "../../constants/feed";
import { fetchPostsById, createPost, cleanUp } from "../../store/postSlice";
import {
  FeedWrapper,
  Posts,
  PostsLane,
  MessagesLane,
  Messages,
  NoPosts,
  NoDataImage,
  NoPostsText,
  InfiniteLoadingTrigger,
} from "./FeedStyled";

const Feed = ({ posts, isLoading, hasError }) => {
  const [page, setPage] = useState(1);
  const { formatMessage } = useIntl();
  const infiniteLoadingRef = useRef(null);
  const shouldLoadMore = useOnScreen(infiniteLoadingRef);
  const dispatch = useDispatch();

  const mockUserId = "a3a50f76-9e9b-4d1c-8598-d1be3c50651c";

  useEffect(() => {
    dispatch(fetchPostsById({ userId: mockUserId, page, size: PAGE_SIZE }));
    return () => {
      dispatch(cleanUp());
    };
  }, [page, dispatch]);

  const renderNoData = () => (
    <NoPosts>
      <NoDataImage />
      <NoPostsText>{formatMessage(localization.noPostsLine1)}</NoPostsText>
      <NoPostsText>{formatMessage(localization.noPostsLine2)}</NoPostsText>
    </NoPosts>
  );

  const renderPosts = () => {
    if (posts.length === 0 && !isLoading) {
      return renderNoData();
    } else {
      return posts.map((p) => (
        <Post
          key={p.id}
          name={`${p.user.firstName} ${p.user.lastName}`}
          username={p.user.username}
          residence={p.user.residence}
          date={p.created_at}
          likes={[]}
          comments={[]}>
          {p.text}
        </Post>
      ));
    }
  };

  const onCreatePost = (post) => {
    dispatch(createPost({ userId: mockUserId, post }));
  };

  useEffect(() => {
    if (!isLoading && shouldLoadMore) {
      setPage(page + 1);
    }
  }, [shouldLoadMore]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FeedWrapper>
      <PostsLane>
        <Posts>
          <PostInput
            onInput={onCreatePost}
            name="Thales Ludwig"
            username="@thalesludwig"
            residence="1303B"
            avatarUrl={avatarMock}
          />
          {renderPosts()}
          <Loader isLoading={isLoading} />
          <InfiniteLoadingTrigger ref={infiniteLoadingRef} />
        </Posts>
      </PostsLane>
      <MessagesLane>
        <Messages>
          <Message name="John Doe" username="@jdoe" residence="1201A" isOnline />
          <Message name="Maxine Lacroux" username="@maxlacroux" residence="201A" isOnline />
          <Message name="Dio Maxe" username="@dmaxe" residence="1501B" />
        </Messages>
      </MessagesLane>
    </FeedWrapper>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.value,
  isLoading: state.posts.isLoading,
  hasError: state.posts.hasError,
});

export default connect(mapStateToProps)(Feed);
