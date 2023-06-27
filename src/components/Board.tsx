import React from "react";
import Square from "./Square";
import { LINE_COUNT } from "../constants/configurations";
import * as squareModel from "../models/square";

type BoardProps = {
  squares: [];
  step: number;
  onClick: (number: number) => void;
};

// Function to render an individual square
const renderSquare = (
  squares: [],
  number: number,
  canPlace: boolean,
  onClick: (number: number) => void
): JSX.Element => {
  return (
    <Square
      key={"square-" + number}
      value={squares[number]}
      canPlace={canPlace}
      onClick={() => onClick(number)}
    />
  );
};

const Board: React.FC<BoardProps> = ({ squares, step, onClick }) => {
  const boardBody: JSX.Element[] = [];
  let column = 0;
  let row = 0;

  // Loop through rows
  while (row < LINE_COUNT) {
    const rowSquares: JSX.Element[] = [];
    column = 0;

    // Loop through columns
    while (column < LINE_COUNT) {
      const number = row * LINE_COUNT + column + 1;
      rowSquares.push(
        renderSquare(
          squares,
          number,
          squareModel.canPlace(squares, number, step),
          onClick
        )
      );
      column++;
    }

    // Add row to the board body
    boardBody.push(
      <div key={"board-body-row-" + (row + 1)} className="body-row">
        {rowSquares}
      </div>
    );
    row++;
  }

  // Render the board
  return (
    <div className="board">
      <div className="body">{boardBody}</div>
    </div>
  );
};

export default Board;
