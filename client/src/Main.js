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
import { Footer } from "./components";
import NavContainer from "./containers/navbar/NavContainer.js";
import Cartbar from "./containers/cart/Cartbar";
import { settings } from "./settings.js";
import Detail from "./pages/Detail/Detail";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./pages/Loading/Loading.js";

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
  const routesData = [
    { route: "/" },
    { route: "/login" },
    { route: "/signup" },
    { route: "/services" },
    { route: "/courses" },
    { route: "/checkout" },
    { route: "/contact" },
    { route: "/orderHistory" },
    { route: "/success" },
    { route: "/privacy" },
    { route: "/cookies" },
  ];

  if (settings.isSplash) {
    return (
      <div>
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/splash" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" && <NavContainer />}
        <Switch>
          {routesData.map((x) => (
            <Route
              exact
              path={x.route}
              render={(props) => (
                <Loading
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          ))}
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
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" && <Cartbar />}
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" && <Footer />}
      </div>
    );
  } else {
    return (
      <div>
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" && <NavContainer />}
        <Switch>
          {routesData.map((x) => (
            <Route
              exact
              path={x.route}
              render={(props) => (
                <Loading
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
          ))}

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
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" && <Cartbar />}

        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" && <Footer />}
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
