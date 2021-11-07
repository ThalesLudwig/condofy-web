import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import Message from "../../components/Message";
import Post from "../../components/Post";
import PostInput from "../../components/PostInput";
import avatarMock from "../../assets/avatarmock.jpg";
import Loader from "../../components/Loader";
import localization from "./localization";
import { FeedService } from "../../services/FeedService";
import { FeedWrapper, Posts, PostsLane, MessagesLane, Messages, NoPosts, NoDataImage, NoPostsText } from "./FeedStyled";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { formatMessage } = useIntl();
  const mockUserId = "a3a50f76-9e9b-4d1c-8598-d1be3c50651c";

  useEffect(() => {
    const feedService = new FeedService();
    setIsLoading(true);
    feedService
      .getPostsByUserId(mockUserId)
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log("ERROR | getPostsByUserId", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const renderNoData = () => (
    <NoPosts>
      <NoDataImage />
      <NoPostsText>{formatMessage(localization.noPostsLine1)}</NoPostsText>
      <NoPostsText>{formatMessage(localization.noPostsLine2)}</NoPostsText>
    </NoPosts>
  );

  const renderPosts = () => {
    if (posts.length === 0) {
      return renderNoData();
    } else {
      return posts.map((p) => (
        <Post
          key={p.id}
          name={`${p.user.firstName} ${p.user.lastName}`}
          username={p.user.username}
          residence={p.user.residence}
          date={p.created_at}
          likes="0"
          comments={[]}>
          {p.text}
        </Post>
      ));
    }
  };

  const onCreatePost = (newPost) => {
    setIsLoading(true);
    const feedService = new FeedService();
    feedService
      .createPost(mockUserId, newPost)
      .then(({ data }) => {
        console.log(data);
        setPosts([data, ...posts]);
      })
      .catch((error) => {
        console.log("ERROR | createPost", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
          <Loader isLoading={isLoading} />
          {!isLoading && renderPosts()}
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

export default Feed;
