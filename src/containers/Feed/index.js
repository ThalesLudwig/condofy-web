import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import Message from "../../components/Message";
import Post from "../../components/Post";
import PostInput from "../../components/PostInput";
import mockPosts from "./mock.js";
import avatarMock from "../../assets/avatarmock.jpg";
import Loader from "../../components/Loader";
import localization from "./localization";
import { FeedWrapper, Posts, PostsLane, MessagesLane, Messages, NoPosts, NoDataImage, NoPostsText } from "./FeedStyled";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { formatMessage } = useIntl();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderNoData = () => (
    <NoPosts>
      <NoDataImage />
      <NoPostsText>{formatMessage(localization.noPostsLine1)}</NoPostsText>
      <NoPostsText>{formatMessage(localization.noPostsLine2)}</NoPostsText>
    </NoPosts>
  );

  const renderPosts = () => {
    return mockPosts.map((p) => (
      <Post
        key={p.id}
        name={p.name}
        username={p.username}
        residence={p.residence}
        date={p.date}
        likes={p.likes}
        comments={p.comments}>
        {p.content}
      </Post>
    ));
  };

  return (
    <FeedWrapper>
      <PostsLane>
        <Posts>
          <PostInput name="Thales Ludwig" username="@thalesludwig" residence="1303B" avatarUrl={avatarMock} />
          <Loader isLoading={isLoading} />
          {!isLoading && renderPosts()}
          {/* {!isLoading && renderNoData()} */}
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
