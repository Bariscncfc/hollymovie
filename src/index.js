import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);