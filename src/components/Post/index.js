import React from "react";
import PropTypes from "prop-types";
import getNameInitials from "../../helpers/getNameInitials";
import { withTheme } from "styled-components";
import { FiHeart, FiMessageSquare } from "react-icons/fi";
import {
  Container,
  Avatar,
  Name,
  Info,
  InfoWrapper,
  NameWrapper,
  Header,
  Content,
  DateTime,
  InteractionsRow,
  Interaction,
  AvatarDefault,
} from "./PostStyled";

const Post = ({ avatarUrl, name, username, residence, date, likes, comments, children, theme }) => {
  const hasLikedThisPost = Math.random() < 0.5; // mocked as random

  return (
    <Container>
      <Header>
        {!!avatarUrl ? <Avatar avatarUrl={avatarUrl} /> : <AvatarDefault>{getNameInitials(name)}</AvatarDefault>}
        <InfoWrapper>
          <NameWrapper>
            <Name>{name}</Name>
            <Info>{`${username} | ${residence}`}</Info>
          </NameWrapper>
          <DateTime>{date}</DateTime>
        </InfoWrapper>
      </Header>
      <Content>{children}</Content>
      <InteractionsRow>
        <Interaction>
          <FiHeart size={20} color={hasLikedThisPost ? theme.LIKE_RED : theme.TEXT_LIGHT} />
          {likes.length > 0 && <Info>{likes.length}</Info>}
        </Interaction>
        <Interaction>
          <FiMessageSquare color={theme.TEXT_LIGHT} size={20} />
          {comments.length > 0 && <Info>{comments.length}</Info>}
        </Interaction>
      </InteractionsRow>
    </Container>
  );
};

Post.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  residence: PropTypes.string.isRequired,
  date: PropTypes.string,
  likes: PropTypes.array,
  comments: PropTypes.array,
};

Post.defaultProps = {
  avatarUrl: "",
  date: "",
  likes: [],
  comments: [],
};

export default withTheme(Post);
