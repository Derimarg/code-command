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
import CookieConsent from "react-cookie-consent";
import { CookieLink } from "./Global";
import { routesData } from "./routesData";
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
  // const element = [
  //   { A: <NavContainer /> },
  //   { B: <Cartbar /> },
  //   { C: <Footer /> },
  // ];
  // function DoNotShow() {
  //   return (
  //     <>
  //       {element.map(() => (
  //         <>
  //           {location.pathname !== "/login" &&
  //             location.pathname !== "/signup" &&
  //             location.pathname !== "/privacy" &&
  //             location.pathname !== "/cookies" &&
  //             location.pathname !== "/terms" && { element }}
  //         </>
  //       ))}
  //     </>
  //   );
  // }

  const Top = () => {
    return (
      <>
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" &&
          location.pathname !== "/terms" && <NavContainer />}
      </>
    );
  };

  const Medium = () => {
    return (
      <>
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" &&
          location.pathname !== "/terms" && <Cartbar />}
      </>
    );
  };

  const Bottom = () => {
    return (
      <>
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/privacy" &&
          location.pathname !== "/cookies" &&
          location.pathname !== "/terms" && <Footer />}
      </>
    );
  };

  if (settings.isSplash) {
    return (
      <>
        <Top />
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
        <Medium />
        <Bottom />
      </>
    );
  } else {
    return (
      <>
        <Top />
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
        <Medium />
        <Bottom />
      </>
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
            <CookieConsent
              debug={true}
              location="bottom"
              style={{ background: "#101522", textAlign: "left" }}
              buttonStyle={{
                color: "#fff",
                background: "#4B59F7",
                fontSize: "24px",
                borderRadius: "8px",
              }}
              buttonText={"I understand!"}
              expires={150}
              buttonClasses="btn btn-primary"
            >
              This site use cookies. See our{" "}
              <CookieLink to="/cookies">privacy policy</CookieLink> for more.
            </CookieConsent>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default Main;
