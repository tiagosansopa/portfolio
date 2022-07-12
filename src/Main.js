import React from "react";

import Exp from "./Sections/Exp.js";
import Cover from "./Sections/Cover.js";
import Samples from "./Sections/Samples.js";
import ReachOut from "./Sections/ReachOut.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <Router>
      <Cover />
      <Samples />
      <Exp />
      <ReachOut />
    </Router>
  );
};

export default Main;
