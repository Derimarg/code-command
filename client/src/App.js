import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // useLocation,
} from "react-router-dom";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import GlobalStyle from "./globalStyles";
import ScrollToTop from "./components/ScrollTop";
import { Provider } from "react-redux";
import store from "./utils/store";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Navbar, Footer } from "./components";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import Checkout from "./pages/Checkout/Checkout";

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <GlobalStyle />
            <ScrollToTop />
            <Switch>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <>
                <Navbar />

                <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/courses" component={Products} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/success" />
                <Route exact path="/orderHistory" />
                <Route exact path="/products/:id" />
                {/* <Route component={NotFound} /> */}

                <Footer />
              </>
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
