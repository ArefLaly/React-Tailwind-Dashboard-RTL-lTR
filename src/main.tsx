import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/index.css";
import "./assets/css/rtl-fonts.css";

import "./libs/translation/I18n.tsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
