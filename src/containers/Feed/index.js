import React from "react";
import Message from "../../components/Message";
import Post from "../../components/Post";
import PostInput from "../../components/PostInput";
import mockPosts from "./mock.js";
import avatarMock from "../../assets/avatarmock.jpg";
import { FeedWrapper, Posts, PostsLane, MessagesLane, Messages } from "./FeedStyled";

const Feed = () => {
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
          {renderPosts()}
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
