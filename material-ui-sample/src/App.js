import React, { useContext } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AuthContext from "./store/AuthContext/auth-context";
import MainLayout from "./components/Layout/MainLayout";
import InRoute from "./components/Generic/Routing/InRoute";
import OutRoute from "./components/Generic/Routing/OutRoute";
import AppContext from "./store/AppContext/app-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  const appCtx = useContext(AppContext);

  const appTheme = createMuiTheme({
    palette: {
      type: appCtx.isDarkTheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={appTheme}>
      {!authCtx.isLoggedIn && <OutRoute />}
      {authCtx.isLoggedIn && (
        <MainLayout>
          <InRoute />
        </MainLayout>
      )}
    </ThemeProvider>
  );
};

export default App;
