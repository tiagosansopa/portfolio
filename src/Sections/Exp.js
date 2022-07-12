import React from "react";
import z from "./z.jpg";
import "./Exp.css";

export const Exp = () => {
  return (
    <div className="exp">
      <div className="card">
        <h1>This is my experience</h1>
        <div className="container">
          <img src={z}></img>
          <img src={z}></img>
          <img src={z}></img>
          <img src={z}></img>
        </div>
      </div>
    </div>
  );
};

export default Exp;
