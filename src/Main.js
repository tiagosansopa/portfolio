import React from "react";
import { Menu } from "./Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Router>
        <Menu />
      </Router>
    </div>
  );
};

export default Main;
