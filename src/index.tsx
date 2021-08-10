import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import { Posts } from "./containers/posts";
import { Calculator } from "./containers/calculator";

const rootElement = document.getElementById("root");

render(
  <Router>
    <Switch>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
    </Switch>
  </Router>,
  rootElement
);
