import React from "react";
import z from "./z.jpg";
import "./Cover.css";

export const Cover = () => {
  return (
    <div className="cover">
      <div className="card">
        <img src={z}></img>
        <h1>This site is under construction</h1>
        <h2>come back later</h2>
        <h3>thank you</h3>
        <h4>uim</h4>
      </div>
    </div>
  );
};

export default Cover;
