// Square.js

import React from "react";
import "./styles.css";

export default function Square({ value, onSquareClick }) {
  return (
    // Render a clickable square with its value
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
