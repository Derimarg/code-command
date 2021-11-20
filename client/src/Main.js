import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import GlobalStyle from "./globalStyles";
import ScrollToTop from "./components/ScrollTop";
import { Provider } from "react-redux";
import store from "./utils/store";
import { settings } from "./settings.js";
import Detail from "./pages/Detail/Detail";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./pages/Loading/Loading.js";
import { routesData, navbarObj, cartObj, footerObj } from "./routesData";
import { BarTemplate } from "./containers/bar/BarTemplate";
import Cookies from "./components/Cookies/Cookies";
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

const Body = (propss) => {
  if (settings.isSplash) {
    return (
      <>
        <BarTemplate {...navbarObj} />
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
        <BarTemplate {...cartObj} />
        <BarTemplate {...footerObj} />
      </>
    );
  } else {
    return (
      <>
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
        <BarTemplate {...cartObj} />
        <BarTemplate {...footerObj} />
      </>
    );
  }
};

function Main(props) {
  return (
    <ApolloProvider client={client}>
      <Router basename="/">
        <div>
          <Provider store={store}>
            <GlobalStyle />
            <ScrollToTop />
            <Body {...props} theme={props.theme} setTheme={props.setTheme} />
            <Cookies />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default Main;
