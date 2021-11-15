import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import Message from "../../components/Message";
import Post from "../../components/Post";
import Loader from "../../components/Loader";
import localization from "./localization";
import { fetchPost, deletePost, cleanUp } from "../../store/postSlice";
import { useParams } from "react-router-dom";
import {
  FeedWrapper,
  Posts,
  PostsLane,
  MessagesLane,
  Messages,
  BackArrow,
  BackText,
  BackRow,
} from "./PostDetailsStyled";

const PostDetails = ({ post, isLoading, hasError }) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const [allowInteraction, setAllowInteraction] = useState(true);

  useEffect(() => {
    dispatch(fetchPost(id));
    dispatch(cleanUp());
  }, [dispatch, id]);

  const onDeletePost = (postId) => {
    setAllowInteraction(false);
    dispatch(deletePost({ postId }));
  };

  return (
    <FeedWrapper>
      <PostsLane>
        <BackRow onClick={() => history.push("/")}>
          <BackArrow />
          <BackText>{formatMessage(localization.feed)}</BackText>
        </BackRow>
        <Posts>
          {!!post && !isLoading && (
            <Post
              id={post.id}
              name={`${post.user.firstName} ${post.user.lastName}`}
              username={post.user.username}
              residence={post.user.residence}
              date={post.created_at}
              likes={[]}
              showOptions={false}
              showDelete
              onDelete={onDeletePost}
              allowInteraction={allowInteraction}
              comments={[]}>
              {post.text}
            </Post>
          )}
          <Loader isLoading={isLoading} />
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
  post: state.posts.selectedPost,
  isLoading: state.posts.isLoading,
  hasError: state.posts.hasError,
});

export default connect(mapStateToProps)(PostDetails);
