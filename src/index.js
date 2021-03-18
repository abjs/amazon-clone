import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Switch, HashRouter as Router } from "react-router-dom";
// HashRouter
import './index.css';
import './color.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const routing = (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route exact path="/help" component={App} />

//     </Switch>
//   </Router>
// );
// ReactDOM.render(routing, document.getElementById("root"));