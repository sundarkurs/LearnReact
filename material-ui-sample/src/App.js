import { Fragment, useState } from "react";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Types from "./pages/Types";

const App = () => {
  const [pageTitle, setPageTitle] = useState("Dashboard");

  return (
    <Fragment>
      <MainLayout pageTitle={pageTitle}>
        <Types></Types>
        <Dashboard></Dashboard>
      </MainLayout>
    </Fragment>
  );
};

export default App;
