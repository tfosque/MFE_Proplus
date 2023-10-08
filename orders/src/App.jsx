import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: Orders</div>
    <div>Framework: react</div>
  </div>
);
ReactDOM.render( <App />, document.getElementById( "app" ) );
