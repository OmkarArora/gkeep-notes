import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { NavProvider, NotesProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </NavProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
