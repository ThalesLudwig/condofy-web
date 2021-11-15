import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import getNameInitials from "../../helpers/getNameInitials";
import { withTheme } from "styled-components";
import { FiHeart, FiMessageSquare, FiMoreVertical, FiTrash2 } from "react-icons/fi";
import { dateParser } from "../../helpers/dateParser";
import DropdownLinks from "../DropdownLinks/DropdownLinks";
import localization from "./localization";
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
  HeaderContent,
  Dropdown,
  MenuOption,
  Divisor,
} from "./PostStyled";

const Post = ({
  id,
  avatarUrl,
  name,
  username,
  residence,
  date,
  likes,
  comments,
  onDelete,
  onUpdate,
  showOptions,
  showDelete,
  allowInteraction,
  children,
  theme,
}) => {
  const hasLikedThisPost = Math.random() < 0.5; // mocked as random
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { formatMessage } = useIntl();

  return (
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
        {showOptions && (
          <DropdownLinks
            isOpen={isOptionsOpen}
            openButton={
              <Interaction id="post-dropdown-button" onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
                <FiMoreVertical color={theme.TEXT} size={20} />
              </Interaction>
            }
            onClose={() => setIsOptionsOpen(false)}>
            <Dropdown>
              <MenuOption onClick={() => onUpdate(id)}>{formatMessage(localization.update)}</MenuOption>
              <Divisor />
              <MenuOption onClick={() => onDelete(id)}>{formatMessage(localization.remove)}</MenuOption>
            </Dropdown>
          </DropdownLinks>
        )}
      </Header>
      <Content>{children}</Content>
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
          {showDelete && (
            <Interaction onClick={() => onDelete(id)}>
              <FiTrash2 color={theme.TEXT} size={20} />
            </Interaction>
          )}
        </InteractionsRow>
      )}
    </Container>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  residence: PropTypes.string.isRequired,
  date: PropTypes.string,
  likes: PropTypes.array,
  comments: PropTypes.array,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  showOptions: PropTypes.bool,
  showDelete: PropTypes.bool,
  allowInteraction: PropTypes.bool,
};

Post.defaultProps = {
  avatarUrl: "",
  date: "",
  likes: [],
  comments: [],
  onDelete: () => {},
  onUpdate: () => {},
  showOptions: true,
  showDelete: false,
  allowInteraction: true,
};

export default withTheme(Post);
