import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:id">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
