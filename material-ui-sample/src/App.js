import { Fragment, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Types from "./pages/Types";

const App = () => {
  const [pageTitle, setPageTitle] = useState("Dashboard");

  return (
    <Fragment>
      <MainLayout pageTitle={pageTitle}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="dashboard"></Redirect>
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/asset-types" exact>
            <Types></Types>
          </Route>
          <Route path="*">
            <p>Not found</p>
          </Route>
        </Switch>
      </MainLayout>
    </Fragment>
  );
};

export default App;
