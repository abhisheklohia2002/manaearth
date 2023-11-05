import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Store from "./Store/IndexStore.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>

      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
