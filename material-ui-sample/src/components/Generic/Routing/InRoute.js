import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../../../pages/Dashboard";
import AssetTypes from "../../../pages/AssetTypes";
import Profile from "../../../pages/Profile";
import MySettings from "../../../pages/MySettings";
import NotFound from "../../../pages/NotFound";
import Assets from "../../../pages/Assets";

const InRoute = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="dashboard"></Redirect>
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/asset-types" exact>
        <AssetTypes />
      </Route>
      <Route path="/assets" exact>
        <Assets />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/my-settings" exact>
        <MySettings />
      </Route>
      <Route path="/login" exact>
        <Redirect to="dashboard"></Redirect>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default InRoute;
