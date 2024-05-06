import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { DataProvider } from "./pages/context/context";

import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </DataProvider>
  </React.StrictMode>
);
