import React, { useState } from "react";
import AppContext from "./app-context";

export const AppContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const toggleThemeHandler = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  const onTitleChangeHandler = (title) => {
    setPageTitle(title);
  };

  return (
    <AppContext.Provider
      value={{
        isDarkTheme: isDarkTheme,
        onToggleTheme: toggleThemeHandler,
        pageTitle: pageTitle,
        onTitleChange: onTitleChangeHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
