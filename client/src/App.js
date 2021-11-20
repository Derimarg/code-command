import React, { useEffect } from "react";
import "./App.css";
import Main from "./Main";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./settings";
import ReactGA from "react-ga";
import GlobalStyles from "./globalStyles";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const useCursor = settings.useCustomCursor;

  return (
    <>
      <GlobalStyles />
      <div>
        {useCursor ? (
          <CursorProvider ringSize={25} transitionTime={75}>
            <Main />
          </CursorProvider>
        ) : (
          <Main />
        )}
      </div>
    </>
  );
}

export default App;
