import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../containers/Feed";
import Messages from "../containers/Messages";
import Statements from "../containers/Statements";
import Residents from "../containers/Residents";
import Reservations from "../containers/Reservations";
import Authorizations from "../containers/Authorizations";
import Deliveries from "../containers/Deliveries";
import Settings from "../containers/Settings";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import { ContentWrapper, SidenavWrapper } from "./RouterStyled";

const Router = () => (
  <BrowserRouter>
    <Navbar />
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
        <Route exact path="/settings" component={Settings} />
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </ContentWrapper>
  </BrowserRouter>
);

export default Router;
