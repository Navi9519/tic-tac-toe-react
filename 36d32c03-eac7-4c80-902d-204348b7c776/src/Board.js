// Board.js

import React, { useState } from "react";
import Square from "./Square";
import "./styles.css";

export default function Board() {
  // State to track the values in each square and the current player
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Function to handle a square click
  const handleClick = (i) => {
    // Check if the square is already filled or if there is a winner
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Create a copy of the squares array to modify
    const nextSquares = squares.slice();

    // Assign 'X' or 'O' based on the current player
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // Update the state with the new squares array and toggle the player
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  // Determine the winner using the helper function
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // Render the game board with squares
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* Render the first row of squares */}
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        {/* Render the second row of squares */}
        <Square
          value={squares[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        {/* Render the third row of squares */}
        <Square
          value={squares[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}

// Helper function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
