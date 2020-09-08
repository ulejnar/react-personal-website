import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/projects">
        <Projects />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
