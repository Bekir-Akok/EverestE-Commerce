import Home from './Pages/HomePage/Home';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import { BrowserRouter as Router , Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/woman" render={() => 
          <>
          <CategoryPage gender="woman"/>
          </>
        } />
    </Router>
    </>
  );
}

export default App;
