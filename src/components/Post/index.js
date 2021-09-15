import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import { withTheme } from "styled-components";
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
} from "./PostStyled";

const Post = ({ avatarUrl, name, username, residence, date, likes, comments, children, theme }) => {
  const hasLikedThisPost = Math.random() < 0.5; // mocked as random

  return (
    <Container>
      <Header>
        <Avatar avatarUrl={avatarUrl} />
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
          <Icon color={hasLikedThisPost ? theme.LIKE_RED : theme.TEXT_LIGHT}>
            {hasLikedThisPost ? "favorite" : "favorite_border"}
          </Icon>
          {likes.length > 0 && <Info>{likes.length}</Info>}
        </Interaction>
        <Interaction>
          <Icon color={theme.TEXT_LIGHT}>chat_bubble_outline</Icon>
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
