import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Default from './Pages/Default';
import Recipes from './Component/Recipes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Component/NavBar';

function App() {
  return (
    <Router>
      <main>
      <NavBar />
      <Switch>
      
      <Route path="/" exact component = {Home} />
      <Route path="/Recipes" exact component = {Recipes} />
      <Route component={Default} />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
