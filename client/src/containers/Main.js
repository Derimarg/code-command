import React from "react";
import GlobalStyle from "../globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import NoMatch from "../pages/NoMatch/NoMatch";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import { Navbar, Footer } from "../components";

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
          <Route component={NoMatch} />
        </>
      </Switch>
      <Footer />
    </Router>
  );
}
