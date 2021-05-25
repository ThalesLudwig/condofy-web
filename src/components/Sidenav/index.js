import React from "react";
import Icon from "../Icon";
import { useLocation } from "react-router-dom";
import { withTheme } from "styled-components";
import { SidenavWrapper, Link, LinkWrapper } from "./SidenavStyled";

const Sidenav = ({ theme }) => {
  const { pathname } = useLocation();

  return (
    <SidenavWrapper>
      <LinkWrapper isActive={"/" === pathname}>
        <Icon color={"/" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>home</Icon>
        <Link to="/">Feed</Link>
      </LinkWrapper>
      <LinkWrapper isActive={"/messages" === pathname}>
        <Icon color={"/messages" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>local_post_office</Icon>
        <Link to="/messages">Mensagens</Link>
      </LinkWrapper>
      <LinkWrapper isActive={"/statements" === pathname}>
        <Icon color={"/statements" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>campaign</Icon>
        <Link to="/statements">Comunicados</Link>
      </LinkWrapper>
      <LinkWrapper isActive={"/residents" === pathname}>
        <Icon color={"/residents" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>apartment</Icon>
        <Link to="/residents">Moradores</Link>
      </LinkWrapper>
      <LinkWrapper isActive={"/authorizations" === pathname}>
        <Icon color={"/authorizations" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>verified_user</Icon>
        <Link to="/authorizations">Autorizações</Link>
      </LinkWrapper>
      <LinkWrapper isActive={"/reservations" === pathname}>
        <Icon color={"/reservations" === pathname ? theme.ACCENT : theme.TEXT_LIGHT}>schedule</Icon>
        <Link to="/reservations">Reservas</Link>
      </LinkWrapper>
    </SidenavWrapper>
  );
};

export default withTheme(Sidenav);
