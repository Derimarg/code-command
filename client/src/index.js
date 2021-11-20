import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MouseContextProvider from "./context/mouse-context";

ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
