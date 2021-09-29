import Home from './Pages/HomePage/Home';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
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
