import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import GlobalStyle from "./globalStyles";
import ScrollToTop from "./components/ScrollTop";
import { Provider } from "react-redux";
import store from "./utils/store";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import {
  // Navbar,
  Footer,
} from "./components";

import NavContainer from "./containers/navbar/NavContainer.js";

import Courses from "./pages/Courses/Courses";
import Services from "./pages/Services/Services";
import Checkout from "./pages/Checkout/Checkout";
import Cartbar from "./containers/cart/Cartbar";
import Detail from "./pages/Detail/Detail";
import Contact from "./pages/Contact/Contact";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import Success from "./pages/Success/Success";
import NotFound from "./pages/NotFound/NotFound";
import { settings } from "./settings.js";
import Load from "./pages/Load/Load";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

const Body = withRouter(({ location }, propss) => {
  if (settings.isSplash) {
    return (
      <div>
        {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/splash" && (
            // ((props) => (
            //   <NavContainer theme={props.theme} setTheme={props.setTheme} />
            // ))
            <NavContainer />
          )}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Load
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/splash"
            render={(props) => (
              <Load
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />

          <Route
            exact
            path="/home"
            render={(props) => (
              <Home
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/courses"
            render={(props) => (
              <Courses
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/checkout"
            render={(props) => (
              <Checkout
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/success"
            render={(props) => (
              <Success
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/orderHistory"
            render={(props) => (
              <OrderHistory
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/products/:id"
            render={(props) => (
              <Detail
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/load"
            render={(props) => (
              <Load
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            render={(props) => (
              <NotFound
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
        </Switch>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Cartbar />
        )}
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Footer />
        )}
      </div>
    );
  } else {
    return (
      <div>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <NavContainer />
        )}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/courses"
            render={(props) => (
              <Courses
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/checkout"
            render={(props) => (
              <Checkout
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/success"
            render={(props) => (
              <Success
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/orderHistory"
            render={(props) => (
              <OrderHistory
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/products/:id"
            render={(props) => (
              <Detail
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            render={(props) => (
              <NotFound
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
        </Switch>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Cartbar />
        )}

        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Footer />
        )}
      </div>
    );
  }
});

function Main(props) {
  return (
    <ApolloProvider client={client}>
      <Router basename="/">
        <div>
          <Provider store={store}>
            <GlobalStyle />
            <ScrollToTop />
            <Body {...props} theme={props.theme} setTheme={props.setTheme} />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default Main;
