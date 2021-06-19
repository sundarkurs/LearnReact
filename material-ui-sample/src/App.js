import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Types from "./pages/Types";
import Profile from "./pages/Profile";
import MySettings from "./pages/MySettings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AuthContext from "./store/AuthContext/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const darkTheme = createMuiTheme({
    palette: {
      type: authCtx.isDarkTheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      {!authCtx.isLoggedIn && (
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="*">
            <Unauthorized />
          </Route>
        </Switch>
      )}

      {authCtx.isLoggedIn && (
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
            <Route path="/login" exact>
              <Redirect to="dashboard"></Redirect>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </MainLayout>
      )}
    </ThemeProvider>
  );
};

export default App;
