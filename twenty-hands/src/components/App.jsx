import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import ClipView from "./clips/ClipView";
import ClipCreate from "./clips/ClipCreate";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ClipView} />
            <Route path="/clips/new" exact component={ClipCreate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
