import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../containers/Feed/Feed";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Feed />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
