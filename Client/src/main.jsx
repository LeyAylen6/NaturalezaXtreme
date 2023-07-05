import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./redux/store/store.js";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";

const domain = "dev-p2xqhkfp7nv8gdru.us.auth0.com";
const clientId = "4cGMuNbLpCY3vzLXqvWxGhXhDEwnctpu";

// import { addToCart } from "../../redux/actions/cartActions";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <BrowserRouter>
      <ColorModeScript initialColorMode="light" />
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </Auth0Provider>
);
