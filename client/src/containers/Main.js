import React from "react";
import GlobalStyle from "../globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import { Navbar } from "../components";

export default function Main() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <>
          <Navbar />
          <Route path="/" exact component={Home} />
        </>
      </Switch>
    </Router>
  );
}
