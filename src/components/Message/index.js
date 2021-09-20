import React from "react";
import PropTypes from "prop-types";
import getNameInitials from "../../helpers/getNameInitials";
import { Container, Avatar, Name, Info, InfoWrapper, Online, NameWrapper, AvatarDefault } from "./MessageStyled";

const Message = ({ imageUrl, name, username, residence, isOnline }) => {
  return (
    <Container>
      {!!imageUrl ? <Avatar avatarUrl={imageUrl} /> : <AvatarDefault>{getNameInitials(name)}</AvatarDefault>}
      <InfoWrapper>
        <NameWrapper>
          <Name>{name}</Name>
          {isOnline && <Online />}
        </NameWrapper>
        <Info>{`${username} | ${residence}`}</Info>
      </InfoWrapper>
    </Container>
  );
};

Message.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  residence: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

Message.defaultProps = {
  imageUrl: "",
  isOnline: false,
};

export default Message;
