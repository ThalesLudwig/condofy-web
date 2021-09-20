import React from "react";
import Icon from "../Icon";
import localization from "./localization";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { withTheme } from "styled-components";
import { useIntl } from "react-intl";
import {
  SidenavWrapper,
  Link,
  LinkWrapper,
  TopContainer,
  BottomContainer,
  AvatarContainer,
  Avatar,
  AvatarInfo,
  Name,
  Info,
  BottomActionWrapper,
  BottomAction,
  BottomActionText,
  LinkText,
  Logo,
  LogoMobile,
  LogoWrapper,
} from "./SidenavStyled";

const Sidenav = ({ theme, activeTheme }) => {
  const { pathname } = useLocation();
  const { formatMessage } = useIntl();

  return (
    <SidenavWrapper>
      <LogoWrapper>
        <Logo activeTheme={activeTheme} />
        <LogoMobile activeTheme={activeTheme} />
        <TopContainer>
          <LinkWrapper isActive={"/" === pathname}>
            <Link to="/">
              <Icon color={"/" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>menu</Icon>
              <LinkText>{formatMessage(localization.feed)}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper isActive={"/messages" === pathname}>
            <Link to="/messages">
              <Icon color={"/messages" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>chat</Icon>
              <LinkText>{formatMessage(localization.messages)}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper isActive={"/statements" === pathname}>
            <Link to="/statements">
              <Icon color={"/statements" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>keyboard_voice</Icon>
              <LinkText>{formatMessage(localization.announcements)}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper isActive={"/residents" === pathname}>
            <Link to="/residents">
              <Icon color={"/residents" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>people</Icon>
              <LinkText>{formatMessage(localization.residents)}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper isActive={"/authorizations" === pathname}>
            <Link to="/authorizations">
              <Icon color={"/authorizations" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>lock</Icon>
              <LinkText>{formatMessage(localization.authorizations)}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper isActive={"/deliveries" === pathname}>
            <Link to="/deliveries">
              <Icon color={"/deliveries" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>inbox</Icon>
              <LinkText>{formatMessage(localization.deliveries)}</LinkText>
            </Link>
          </LinkWrapper>
          <LinkWrapper isActive={"/reservations" === pathname}>
            <Link to="/reservations">
              <Icon color={"/reservations" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>assignment</Icon>
              <LinkText>{formatMessage(localization.reservations)}</LinkText>
            </Link>
          </LinkWrapper>
        </TopContainer>
      </LogoWrapper>
      <BottomContainer>
        <BottomActionWrapper>
          <BottomAction to="/settings">
            <Icon color={theme.ACCENT}>settings</Icon>
            <BottomActionText>{formatMessage(localization.settings)}</BottomActionText>
          </BottomAction>
          <BottomAction to="/notifications">
            <Icon color={theme.ACCENT}>notifications</Icon>
            <BottomActionText>{formatMessage(localization.notifications)}</BottomActionText>
          </BottomAction>
        </BottomActionWrapper>
        <AvatarContainer>
          <Avatar />
          <AvatarInfo>
            <Name>Thales Valentini</Name>
            <Info>@thalesludwig</Info>
            <Info>1303B</Info>
          </AvatarInfo>
        </AvatarContainer>
      </BottomContainer>
    </SidenavWrapper>
  );
};

const mapStateToProps = (state) => ({
  activeTheme: state.theme.value,
});

export default withTheme(connect(mapStateToProps)(Sidenav));
