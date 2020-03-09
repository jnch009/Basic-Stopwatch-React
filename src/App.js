import React from "react";
import "./styles.css";
import Stopwatch from "./components/Stopwatch/Stopwatch.js";

export default function App() {
  return (
    <div className="App">
      <div className="boxContainer">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
      </div>
      <Stopwatch />
    </div>
  );
}
