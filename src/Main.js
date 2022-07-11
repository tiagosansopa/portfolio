import React from "react";
import Cover from "./Sections/Cover.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <Router>
      <Cover />
    </Router>
  );
};

export default Main;
