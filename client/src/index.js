// src/index.js
import React from "react";               //  import React
import ReactDOM from "react-dom/client"; // import ReactDOM for React 18+
import { BrowserRouter } from "react-router-dom"; //  import BrowserRouter
import App from "./App";                 //  import your App component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // optional for modals, dropdowns

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);