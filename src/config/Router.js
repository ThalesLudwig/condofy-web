import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../containers/Feed";
import Messages from "../containers/Messages";
import Statements from "../containers/Statements";
import Residents from "../containers/Residents";
import Reservations from "../containers/Reservations";
import Authorizations from "../containers/Authorizations";

import Sidenav from "../components/Sidenav";

const Router = () => (
  <BrowserRouter>
    <Sidenav />
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/statements" component={Statements} />
      <Route exact path="/residents" component={Residents} />
      <Route exact path="/authorizations" component={Authorizations} />
      <Route exact path="/reservations" component={Reservations} />
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
