import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TopHeader from "./Header/TopHeader";
import MenuDrawer from "./Menu/MenuDrawer";
import AuthContext from "../../store/AuthContext/auth-context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();
  const authCtx = useContext(AuthContext);

  const [menuDrawerOpen, setMenuDrawerOpen] = useState(true);

  const openMenuDrawerHandler = () => {
    setMenuDrawerOpen(true);
  };
  const closeMenuDrawerHandler = () => {
    setMenuDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopHeader
        pageTitle={authCtx.pageTitle}
        menuDrawerOpen={menuDrawerOpen}
        onDrawerOpen={openMenuDrawerHandler}
      />
      <MenuDrawer
        menuDrawerOpen={menuDrawerOpen}
        onDrawerClose={closeMenuDrawerHandler}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
  );
};

export default MainLayout;
