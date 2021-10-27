import React from "react";
import localization from "./localization";
import { useLocation } from "react-router-dom";
import { withTheme } from "styled-components";
import { useIntl } from "react-intl";
import {
  FiAlignJustify,
  FiMessageCircle,
  FiMic,
  FiUsers,
  FiLock,
  FiShoppingBag,
  FiCalendar,
  FiShoppingCart,
  FiSettings,
  FiBell,
} from "react-icons/fi";
import {
  SidenavWrapper,
  Link,
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
  Divisor,
} from "./SidenavStyled";

const Sidenav = ({ theme }) => {
  const { pathname } = useLocation();
  const { formatMessage } = useIntl();

  return (
    <SidenavWrapper>
      <TopContainer>
        <Link to="/">
          <FiAlignJustify size={20} color={"/" === pathname ? theme.ACCENT : theme.TEXT_LIGHT} />
          <LinkText>{formatMessage(localization.feed)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/messages">
          <FiMessageCircle size={20} color={"/messages" === pathname ? theme.ACCENT : theme.TEXT_LIGHT} />
          <LinkText>{formatMessage(localization.messages)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/statements">
          <FiMic size={20} color={"/statements" === pathname ? theme.ACCENT : theme.TEXT_LIGHT} />
          <LinkText>{formatMessage(localization.announcements)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/residents">
          <FiUsers size={20} color={"/residents" === pathname ? theme.ACCENT : theme.TEXT_LIGHT} />
          <LinkText>{formatMessage(localization.residents)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/authorizations">
          <FiLock size={20} color={"/authorizations" === pathname ? theme.ACCENT : theme.TEXT_LIGHT} />
          <LinkText>{formatMessage(localization.authorizations)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/deliveries">
          <FiShoppingBag size={20} color={"/deliveries" === pathname ? theme.ACCENT : theme.TEXT_LIGHT} />
          <LinkText>{formatMessage(localization.deliveries)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/reservations">
          <FiCalendar size={20} color={"/reservations" === pathname ? theme.ACCENT : theme.TEXT_LIGHT} />
          <LinkText>{formatMessage(localization.reservations)}</LinkText>
        </Link>
        <Link to="/marketplace">
          <FiShoppingCart size={20} color={"/marketplace" === pathname ? theme.ACCENT : theme.TEXT_LIGHT} />
          <LinkText>{formatMessage(localization.marketplace)}</LinkText>
        </Link>
      </TopContainer>
      <BottomContainer>
        <BottomActionWrapper>
          <BottomAction to="/settings">
            <FiSettings size={20} color={theme.ACCENT} />
            <BottomActionText>{formatMessage(localization.settings)}</BottomActionText>
          </BottomAction>
          <BottomAction to="/notifications">
            <FiBell size={20} color={theme.ACCENT} />
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

export default withTheme(Sidenav);
