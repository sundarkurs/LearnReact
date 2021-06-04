import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/Movies/MoviesList";
import AddMovie from "./components/Movies/AddMovie";
import "./App.css";
import UsingAsyncFetch from "./components/Layout/UsingAsyncFetch";
import UsingFetch from "./components/Layout/UsingFetch";
import UsingAxios from "./components/Layout/UsingAxios";

function App() {
  return (
    <div className="row">
      <div className="column" style={{ backgroundColor: "#aaa" }}>
        <h2>Using Fetch</h2>
        <UsingFetch></UsingFetch>
      </div>
      <div className="column" style={{ backgroundColor: "#bbb" }}>
        <h2>Using Async Fetch</h2>
        <UsingAsyncFetch></UsingAsyncFetch>
      </div>
      <div className="column" style={{ backgroundColor: "#ccc" }}>
        <h2>Using Axios</h2>
        <UsingAxios></UsingAxios>
      </div>
    </div>
  );
}

export default App;
