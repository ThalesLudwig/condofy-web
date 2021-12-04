import React, { useState, useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import Message from "../../components/Message";
import Post from "../../components/Post";
import PostInput from "../../components/PostInput";
import avatarMock from "../../assets/avatarmock.jpg";
import localization from "./localization";
import { useOnScreen } from "../../hooks/useOnScreen";
import { PAGE_SIZE } from "../../constants/feed";
import { fetchPostsById, createPost, deletePost } from "../../store/postSlice";
import PostSkeleton from "../../components/Post/Skeleton";
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
  const history = useHistory();

  const mockUserId = "a3a50f76-9e9b-4d1c-8598-d1be3c50651c";

  useEffect(() => {
    dispatch(
      fetchPostsById({
        userId: mockUserId,
        page,
        size: PAGE_SIZE,
        errorMessage: formatMessage(localization.fetchPostsError),
      }),
    );
  }, [page, dispatch, formatMessage]);

  const renderNoData = () => (
    <NoPosts>
      <NoDataImage />
      <NoPostsText>{formatMessage(localization.noPostsLine1)}</NoPostsText>
      <NoPostsText>{formatMessage(localization.noPostsLine2)}</NoPostsText>
    </NoPosts>
  );

  const onDeletePost = (postId) => {
    dispatch(
      deletePost({
        postId,
        successMessage: formatMessage(localization.deletePostSuccess),
        errorMessage: formatMessage(localization.deletePostError),
      }),
    );
  };

  const onUpdatePost = (postId) => {
    history.push(`posts/${postId}`);
  };

  const renderPosts = () => {
    if (posts.length === 0 && !isLoading) {
      return renderNoData();
    } else {
      return posts.map((p) => (
        <Post
          key={p.id}
          id={p.id}
          name={`${p.user.firstName} ${p.user.lastName}`}
          username={p.user.username}
          residence={p.user.residence}
          date={p.created_at}
          likes={[]}
          onDelete={onDeletePost}
          onUpdate={onUpdatePost}
          comments={[]}>
          {p.text}
        </Post>
      ));
    }
  };

  const onCreatePost = (post) => {
    dispatch(
      createPost({
        userId: mockUserId,
        post,
        successMessage: formatMessage(localization.createPostSuccess),
        errorMessage: formatMessage(localization.createPostError),
      }),
    );
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
          {isLoading && (
            <>
              <PostSkeleton />
              <PostSkeleton />
            </>
          )}
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
