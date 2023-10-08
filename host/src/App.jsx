import React from "react";
import ReactDOM from "react-dom";
import Navbar from "navbar/Navbar";
import Footer from "footer/Footer";
import Sidebar from "sidebar/Sidebar";
import ProplusContent from "proplus_content/ProplusContent";
import Orders from 'orders/Orders';

import "./index.css";

const App = () => (
  <div className="row">
    <div className="col-12">
      <Navbar />
    </div>

    <div className="container-lg">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <ProplusContent />
        </div>
      </div>
    </div>

    <div className="col-12">
      <Footer />
    </div>
  </div>
);
ReactDOM.render( <App />, document.getElementById( "app" ) );