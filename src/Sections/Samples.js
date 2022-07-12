import React from "react";
import z from "./z.jpg";
import "./Samples.css";

export const Samples = () => {
  return (
    <div className="samp">
      <div className="card">
        <h1>Here are my samples</h1>
        <div className="container">
          <img src={z}></img>
          <img src={z}></img>
          <img src={z}></img>
          <img src={z}></img>
          <img src={z}></img>
          <img src={z}></img>
        </div>
      </div>
    </div>
  );
};

export default Samples;
