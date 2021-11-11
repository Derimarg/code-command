import React from "react";
import GlobalStyle from "../globalStyles";
import ScrollToTop from "../components/ScrollTop";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // useLocation,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import { Navbar, Footer } from "../components";
import Products from "../pages/Products/Products";
import Services from "../pages/Services/Services";

// You can use the last <Route> in a <Switch> as a kind of
// "fallback" route, to catch 404 errors.
//
// There are a few useful things to note about this example:
//
// - A <Switch> renders the first child <Route> that matches
// - A <Redirect> may be used to redirect old URLs to new ones
// - A <Route path="*> always matches

export default function Main() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />

      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/courses" exact component={Products} />
          {/* <Route component={NotFound} /> */}
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

// function NotFound() {
//   let location = useLocation();

//   return (
//     <>
//       <h1>
//         404 Page NotFound <code>{location.pathname}</code>
//       </h1>
//     </>
//   );
// }
