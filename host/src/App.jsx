import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  browserHistory,
} from "react-router-dom";
import Home from "./Home";
import "./index.css";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </Router>
);
//
root.render(<App />, document.getElementById("app"));
