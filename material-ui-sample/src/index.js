import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthContextProvider } from "./store/AuthContext/auth-context-provider";
import { AppContextProvider } from "./store/AppContext/app-context-provider";

ReactDOM.render(
  <AuthContextProvider>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
