import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./Context/auth.context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
