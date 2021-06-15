import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/AuthContext/auth-context";
import { CartContextProvider } from "./store/CartContext/cart-context-provider";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <CartContextProvider>
      <React.Fragment>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </React.Fragment>
    </CartContextProvider>
  );
}

export default App;
