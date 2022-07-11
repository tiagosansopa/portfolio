import React from "react";
import Cover from "./Sections/Cover.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Router>
        <Cover />
      </Router>
    </div>
  );
};

export default Main;
