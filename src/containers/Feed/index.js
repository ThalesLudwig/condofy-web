import React from "react";
import localization from "./localization";
import Message from "../../components/Message";
import Post from "../../components/Post";
import { FeedWrapper, Title, Posts, PostsLane, MessagesLane, Messages, MessageWrapper } from "./FeedStyled";
import { useIntl } from "react-intl";
import mockPosts from "./mock.js";

const Feed = () => {
  const { formatMessage } = useIntl();

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
        <Title>{formatMessage(localization.feed)}</Title>
        <Posts>{renderPosts()}</Posts>
      </PostsLane>
      <MessagesLane>
        <MessageWrapper>
          <Title>{formatMessage(localization.messages)}</Title>
        </MessageWrapper>
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
