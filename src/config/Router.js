import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../containers/Feed";
import Messages from "../containers/Messages";
import Announcements from "../containers/Announcements";
import Residents from "../containers/Residents";
import Reservations from "../containers/Reservations";
import Authorizations from "../containers/Authorizations";
import Deliveries from "../containers/Deliveries";
import Marketplace from "../containers/Marketplace";
import Settings from "../containers/Settings";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import { ContentWrapper, SidenavWrapper } from "./RouterStyled";

const Router = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar onOpen={() => setIsNavbarOpen(!isNavbarOpen)} />
      <SidenavWrapper isOpen={isNavbarOpen}>
        <Sidenav isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
      </SidenavWrapper>
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/statements" component={Announcements} />
          <Route exact path="/residents" component={Residents} />
          <Route exact path="/authorizations" component={Authorizations} />
          <Route exact path="/deliveries" component={Deliveries} />
          <Route exact path="/marketplace" component={Marketplace} />
          <Route exact path="/reservations" component={Reservations} />
          <Route exact path="/settings" component={Settings} />
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </ContentWrapper>
    </BrowserRouter>
  );
};

export default Router;
