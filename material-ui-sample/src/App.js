import { Fragment } from "react";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Fragment>
      <MainLayout>
        <Dashboard></Dashboard>
      </MainLayout>
    </Fragment>
  );
};

export default App;
