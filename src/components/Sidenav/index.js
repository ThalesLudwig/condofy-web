import React, { useRef } from "react";
import localization from "./localization";
import { useLocation } from "react-router-dom";
import { withTheme } from "styled-components";
import { useIntl } from "react-intl";
import {
  FiHome,
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
import { useClickOutside } from "../../hooks/useClickOutside";

const Sidenav = ({ theme, isOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const { formatMessage } = useIntl();
  const sideNavRef = useRef();

  useClickOutside(
    sideNavRef,
    () => {
      setIsOpen(false);
    },
    ["menu-button"],
  );

  return (
    <SidenavWrapper isOpen={isOpen} ref={sideNavRef}>
      <TopContainer>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <FiHome size={20} color={"/" === pathname ? theme.ACCENT : theme.TEXT} />
          <LinkText>{formatMessage(localization.feed)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/messages" onClick={() => setIsOpen(false)}>
          <FiMessageCircle size={20} color={"/messages" === pathname ? theme.ACCENT : theme.TEXT} />
          <LinkText>{formatMessage(localization.messages)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/statements" onClick={() => setIsOpen(false)}>
          <FiMic size={20} color={"/statements" === pathname ? theme.ACCENT : theme.TEXT} />
          <LinkText>{formatMessage(localization.announcements)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/residents" onClick={() => setIsOpen(false)}>
          <FiUsers size={20} color={"/residents" === pathname ? theme.ACCENT : theme.TEXT} />
          <LinkText>{formatMessage(localization.residents)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/authorizations" onClick={() => setIsOpen(false)}>
          <FiLock size={20} color={"/authorizations" === pathname ? theme.ACCENT : theme.TEXT} />
          <LinkText>{formatMessage(localization.authorizations)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/deliveries" onClick={() => setIsOpen(false)}>
          <FiShoppingBag size={20} color={"/deliveries" === pathname ? theme.ACCENT : theme.TEXT} />
          <LinkText>{formatMessage(localization.deliveries)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/reservations" onClick={() => setIsOpen(false)}>
          <FiCalendar size={20} color={"/reservations" === pathname ? theme.ACCENT : theme.TEXT} />
          <LinkText>{formatMessage(localization.reservations)}</LinkText>
        </Link>
        <Divisor />
        <Link to="/marketplace" onClick={() => setIsOpen(false)}>
          <FiShoppingCart size={20} color={"/marketplace" === pathname ? theme.ACCENT : theme.TEXT} />
          <LinkText>{formatMessage(localization.marketplace)}</LinkText>
        </Link>
      </TopContainer>
      <BottomContainer>
        <BottomActionWrapper>
          <BottomAction to="/settings" onClick={() => setIsOpen(false)}>
            <FiSettings size={20} color={"/settings" === pathname ? theme.ACCENT : theme.TEXT} />
            <BottomActionText>{formatMessage(localization.settings)}</BottomActionText>
          </BottomAction>
          <BottomAction to="/notifications" onClick={() => setIsOpen(false)}>
            <FiBell size={20} color={"/notifications" === pathname ? theme.ACCENT : theme.TEXT} />
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
