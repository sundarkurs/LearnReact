import { Fragment } from "react";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Types from "./pages/Types";
const App = () => {
  return (
    <Fragment>
      <MainLayout>
        <Types></Types>
        <Dashboard></Dashboard>
      </MainLayout>
    </Fragment>
  );
};

export default App;
