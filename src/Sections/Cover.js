import React from "react";
import { Button, Card, CardContent } from "@mui/material";
import z from "./z.jpg";
import "./Cover.css";

export const Cover = () => {
  return (
    <Card>
      <CardContent>
        <img src={z}></img>
        <h1>Santiago Solórzano</h1>
        <h2>come back later</h2>
        <h3>thank you</h3>
        <Button variant="contained">UIM</Button>;
      </CardContent>
    </Card>
  );
};

export default Cover;
