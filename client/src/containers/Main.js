import React from "react";
import GlobalStyle from "../globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Login from "../pages/Login/Login";
import { Navbar } from "../components";

export default function Main() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}
