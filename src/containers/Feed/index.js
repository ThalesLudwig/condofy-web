import React from "react";
import localization from "./localization";
import Message from "../../components/Message";
import { FeedWrapper, Title, Posts, PostsLane, MessagesLane, Messages, MessageWrapper } from "./FeedStyled";
import { useIntl } from "react-intl";

const Feed = () => {
  const { formatMessage } = useIntl();

  return (
    <FeedWrapper>
      <PostsLane>
        <Title>{formatMessage(localization.feed)}</Title>
        <Posts>test</Posts>
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
