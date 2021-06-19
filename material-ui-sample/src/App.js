import React, { Fragment, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Types from "./pages/Types";
import Profile from "./pages/Profile";
import MySettings from "./pages/MySettings";
import NotFound from "./pages/NotFound";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark", // light
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <MainLayout pageTitle={pageTitle}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="dashboard"></Redirect>
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/asset-types" exact>
            <Types></Types>
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/my-settings" exact>
            <MySettings />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
