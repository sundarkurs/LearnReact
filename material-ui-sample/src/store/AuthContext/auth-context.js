import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  isDarkTheme: false,
  onToggleTheme: () => {},
  pageTitle: "",
  onTitleChange: (title) => {},
});

export default AuthContext;
