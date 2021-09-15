import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../containers/Feed";
import Messages from "../containers/Messages";
import Statements from "../containers/Statements";
import Residents from "../containers/Residents";
import Reservations from "../containers/Reservations";
import Authorizations from "../containers/Authorizations";
import Deliveries from "../containers/Deliveries";
import Sidenav from "../components/Sidenav";
import SCREEN from "../constants/screen";

const SidenavWrapper = styled.div`
  margin-right: 70px;

  @media (max-width: ${SCREEN.SIZES.MOBILE}) {
    margin-right: 15px;
  }
`;

const ContentWrapper = styled.div`
  width: 780px;
  margin-top: 7px;
`;

const Router = () => (
  <BrowserRouter>
    <SidenavWrapper>
      <Sidenav />
    </SidenavWrapper>
    <ContentWrapper>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/statements" component={Statements} />
        <Route exact path="/residents" component={Residents} />
        <Route exact path="/authorizations" component={Authorizations} />
        <Route exact path="/deliveries" component={Deliveries} />
        <Route exact path="/reservations" component={Reservations} />
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </ContentWrapper>
  </BrowserRouter>
);

export default Router;
