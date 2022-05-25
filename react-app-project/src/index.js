import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/TopNavbar";

ReactDOM.render(
  <React.StrictMode>
    <TopNavbar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

