import React from "react";
import "./styles.css";
import Stopwatch from "./components/Stopwatch/Stopwatch.js";

export default function App() {
  return (
    <div className="App">
      <div class="boxContainer">
        <div class="box1" />
        <div class="box2" />
        <div class="box3" />
      </div>
      <Stopwatch />
    </div>
  );
}
