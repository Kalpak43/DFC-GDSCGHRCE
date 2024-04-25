import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkMode";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </HashRouter>
  </React.StrictMode>
);
