import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Switch>
          <Route exact path='/Checkout'>
            <Checkout />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
