import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
//import Contact from "./Contact";
import Projects from "./Projects";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/About" component={About} />
    </Switch>
  );
};

export default Main;
