import React, { useState } from "react";
import PropTypes from "prop-types";
import { FiImage } from "react-icons/fi";
import getNameInitials from "../../helpers/getNameInitials";
import { withTheme } from "styled-components";
import { useIntl } from "react-intl";
import localization from "./localization";
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

const PostInput = ({ avatarUrl, name, username, residence, theme, onInput }) => {
  const { formatMessage } = useIntl();
  const [text, setText] = useState("");

  const expandTextarea = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const onSubmit = () => {
    onInput({ text });
    setText("");
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
      <Content
        onChange={(e) => setText(e.target.value)}
        placeholder={formatMessage(localization.defaultText)}
        onKeyDown={expandTextarea}
        value={text}
      />
      <InteractionsRow>
        <Interaction>
          <FiImage color={theme.TEXT} size={20} />
        </Interaction>
        <Publish onClick={onSubmit}>{formatMessage(localization.publish)}</Publish>
      </InteractionsRow>
    </Container>
  );
};

PostInput.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  residence: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};

PostInput.defaultProps = {
  avatarUrl: "",
};

export default withTheme(PostInput);
