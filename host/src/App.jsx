import React from "react";
import ReactDOM from "react-dom";
import Navbar from "navbar/Navbar";
import Footer from "footer/Footer";

import "./index.css";

const App = () => (
  <div className="row">
    <div className="container-fluid">
      <div className="col-12">
        <Navbar />
        <Footer />
      </div>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
