import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";

const App = () =>
<Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </div>
  </Router>;

export default App;

