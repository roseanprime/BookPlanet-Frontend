import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./Context/auth.context";
import "./index.css";
import App from "./App";
import "./App.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <Router>
        <App />
      </Router>
    </AuthProviderWrapper>
  </React.StrictMode>
);
