import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {

  // Without JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Welcome to React"),
  //   React.createElement(Expenses, {})
  // );

  return (
    <div>
      <h2>Welcome to React</h2>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
