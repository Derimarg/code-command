import React from "react";
import GlobalStyle from "../globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import { Navbar } from "../components";

export default function Main() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
