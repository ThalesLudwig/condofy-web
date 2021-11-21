import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import getNameInitials from "../../helpers/getNameInitials";
import { withTheme } from "styled-components";
import { FiHeart, FiMessageSquare, FiTrash2 } from "react-icons/fi";
import { dateParser } from "../../helpers/dateParser";
import localization from "./localization";
import { Button } from "../Button/Button";
import ModalDelete from "../ModalDelete/ModalDelete";
import {
  Container,
  Avatar,
  Name,
  Info,
  InfoWrapper,
  NameWrapper,
  Header,
  DateTime,
  InteractionsRow,
  Interaction,
  AvatarDefault,
  HeaderContent,
  EditBox,
} from "./PostEditStyled";

const PostEdit = ({
  id,
  avatarUrl,
  name,
  username,
  residence,
  date,
  likes,
  comments,
  onDelete,
  allowInteraction,
  onSubmit,
  children,
  theme,
}) => {
  const hasLikedThisPost = Math.random() < 0.5; // mocked as random
  const { formatMessage } = useIntl();
  const [text, setText] = useState(children);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const expandTextarea = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            {!!avatarUrl ? <Avatar avatarUrl={avatarUrl} /> : <AvatarDefault>{getNameInitials(name)}</AvatarDefault>}
            <InfoWrapper>
              <NameWrapper>
                <Name>{name}</Name>
                <Info>{`${username} | ${residence}`}</Info>
              </NameWrapper>
              <DateTime>{dateParser(date)}</DateTime>
            </InfoWrapper>
          </HeaderContent>
        </Header>
        <EditBox
          onChange={(e) => setText(e.target.value)}
          placeholder={formatMessage(localization.defaultText)}
          onKeyDown={expandTextarea}
          value={text}
        />
        {allowInteraction && (
          <InteractionsRow>
            <Interaction>
              <FiHeart size={20} color={hasLikedThisPost ? theme.LIKE_RED : theme.TEXT} />
              {likes.length > 0 && <Info>{likes.length}</Info>}
            </Interaction>
            <Interaction>
              <FiMessageSquare color={theme.TEXT} size={20} />
              {comments.length > 0 && <Info>{comments.length}</Info>}
            </Interaction>
            <Interaction onClick={() => setIsModalOpen(true)}>
              <FiTrash2 color={theme.TEXT} size={20} />
            </Interaction>
          </InteractionsRow>
        )}
      </Container>
      <ModalDelete isOpen={isModalOpen} onDelete={() => onDelete(id)} onClose={() => setIsModalOpen(false)} />
      {allowInteraction && (
        <Button
          isDisabled={text.trim().length <= 0}
          text={formatMessage(localization.update)}
          onPress={() => onSubmit(text)}
        />
      )}
    </>
  );
};

PostEdit.propTypes = {
  id: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  residence: PropTypes.string.isRequired,
  date: PropTypes.string,
  likes: PropTypes.array,
  comments: PropTypes.array,
  allowInteraction: PropTypes.bool,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func,
};

PostEdit.defaultProps = {
  avatarUrl: "",
  date: "",
  likes: [],
  comments: [],
  allowInteraction: true,
  onDelete: () => {},
  onSubmit: () => {},
};

export default withTheme(PostEdit);
