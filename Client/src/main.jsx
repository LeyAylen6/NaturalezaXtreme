import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-vsgjmkp40qf5t2dv.us.auth0.com';
const clientId = 'ByyZUyh2OH85yx83GcrbbykXYco6dp1N';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
