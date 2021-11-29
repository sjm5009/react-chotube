import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Chotube from "./service/chotube";

const chotube = new Chotube(process.env.REACT_APP_CHOTUBE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App chotube={chotube} />
  </React.StrictMode>,
  document.getElementById("root")
);
