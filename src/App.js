import Home from './Pages/HomePage/Home';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import BasketPage from './Pages/BasketPage/BasketPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/register">
            <RegisterPage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/basket">
            <BasketPage/>
          </Route>
          <Route exact path="/productpage/:product">
            <ProductPage/>
          </Route>
          <Route exact path="/categorypage/:category">
            <CategoryPage/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
