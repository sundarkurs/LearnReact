import React, { useEffect, useState } from "react";
import CounterRoot from "./components/Layout/CounterRoot";
import TasksRoot from "./components/Layout/TasksRoot";

function App() {
  return (
    <React.Fragment>
      <TasksRoot></TasksRoot>
      <CounterRoot></CounterRoot>
    </React.Fragment>
  );
}

export default App;
