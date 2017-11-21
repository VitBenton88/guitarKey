import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () =>
<Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>;

export default App;

