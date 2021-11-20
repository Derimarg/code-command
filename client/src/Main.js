import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import ScrollToTop from "./components/ScrollTop";
import { Provider } from "react-redux";
import store from "./utils/store";
import Detail from "./pages/Detail/Detail";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./pages/Loading/Loading.js";
import GlobalStyles from "./globalStyles";
import {
  routesData,
  navbarObj,
  cartObj,
  footerObj,
  cookieObj,
  topObj,
} from "./routesData";
import { BarTemplate } from "./containers/bar/BarTemplate";

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

export default function Main() {
  return (
    <ApolloProvider client={client}>
      <Router basename="/">
        <div>
          <Provider store={store}>
            <GlobalStyles />
            <ScrollToTop />
            <>
              <BarTemplate {...navbarObj} />
              <Switch>
                {routesData.map((x) => (
                  <Route exact path={x.route} component={Loading} />
                ))}
                <Route exact path="/products/:id" component={Detail} />

                <Route component={NotFound} />
              </Switch>
              <BarTemplate {...cartObj} />
              <BarTemplate {...footerObj} />
            </>
            <BarTemplate {...cookieObj} />
            <BarTemplate {...topObj} />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
