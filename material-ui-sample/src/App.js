import React, { useContext } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AuthContext from "./store/AuthContext/auth-context";
import MainLayout from "./components/Layout/MainLayout";
import InRoute from "./components/Generic/Routing/InRoute";
import OutRoute from "./components/Generic/Routing/OutRoute";

const App = () => {
  const authCtx = useContext(AuthContext);
  const darkTheme = createMuiTheme({
    palette: {
      type: authCtx.isDarkTheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
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
