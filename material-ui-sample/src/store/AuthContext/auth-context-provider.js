import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";

const LOGGED_IN_LOCAL_STORE = "IsUserLoggedIn";

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [pageTitle, setPageTitle] = useState("Dashboard");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem(
      LOGGED_IN_LOCAL_STORE
    );

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem(LOGGED_IN_LOCAL_STORE);
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    localStorage.setItem(LOGGED_IN_LOCAL_STORE, "1");
    setIsLoggedIn(true);
  };

  const toggleThemeHandler = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  const onTitleChangeHandler = (title) => {
    setPageTitle(title);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        isDarkTheme: isDarkTheme,
        onToggleTheme: toggleThemeHandler,
        pageTitle: pageTitle,
        onTitleChange: onTitleChangeHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
