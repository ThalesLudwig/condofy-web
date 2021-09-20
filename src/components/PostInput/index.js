import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import getNameInitials from "../../helpers/getNameInitials";
import { withTheme } from "styled-components";
import {
  Container,
  Avatar,
  Name,
  Info,
  InfoWrapper,
  Header,
  Content,
  InteractionsRow,
  Interaction,
  AvatarDefault,
  Publish,
} from "./PostInputStyled";

const PostInput = ({ avatarUrl, name, username, residence, theme }) => {
  const expandTextarea = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <Container>
      <Header>
        {!!avatarUrl ? <Avatar avatarUrl={avatarUrl} /> : <AvatarDefault>{getNameInitials(name)}</AvatarDefault>}
        <InfoWrapper>
          <Name>{name}</Name>
          <Info>{`${username} | ${residence}`}</Info>
        </InfoWrapper>
      </Header>
      <Content placeholder="Diga olá para seus vizinhos!" onKeyDown={expandTextarea} />
      <InteractionsRow>
        <Interaction>
          <Icon color={theme.TEXT_LIGHT}>image</Icon>
        </Interaction>
        <Publish>Publicar</Publish>
      </InteractionsRow>
    </Container>
  );
};

PostInput.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  residence: PropTypes.string.isRequired,
};

PostInput.defaultProps = {
  avatarUrl: "",
};

export default withTheme(PostInput);
