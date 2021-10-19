import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import BasketPage from './Pages/BasketPage/BasketPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import OrderPage from './Pages/OrderPage/OrderPage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/orders">
            <OrderPage />
          </Route>
          <Route exact path="/profilepage/:displayName">
            <ProfilePage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/basket">
            <BasketPage />
          </Route>
          <Route exact path="/productpage/:product">
            <ProductPage />
          </Route>
          <Route exact path="/categorypage/:category">
            <CategoryPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
