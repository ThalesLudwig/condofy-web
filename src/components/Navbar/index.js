import React from "react";
import localization from "./localization";
import { connect } from "react-redux";
import { useIntl } from "react-intl";
import {
  Container,
  Wrapper,
  Logo,
  MenuButton,
  Search,
  SearchInput,
  SearchIcon,
  Avatar,
  BellIcon,
  Options,
  Notifications,
} from "./NavbarStyled";

const Navbar = ({ activeTheme, onOpen }) => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      <Wrapper>
        <Logo>Condofy</Logo>
        <MenuButton id="menu-button" onClick={onOpen} />
        <Search>
          <SearchIcon>search</SearchIcon>
          <SearchInput placeholder={formatMessage(localization.search)} />
        </Search>
        <Options>
          <Notifications>
            <BellIcon>notifications</BellIcon>
          </Notifications>
          <Avatar />
        </Options>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  activeTheme: state.theme.value,
});

export default connect(mapStateToProps)(Navbar);
