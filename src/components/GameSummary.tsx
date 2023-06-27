import React from "react";
import * as gameModel from "../models/game";

interface IProps {
  squares: string[];
  numbers: number[];
}

// Function to determine the game status and render the corresponding message
const status = (squares: string[], numbers: number[]): React.ReactNode => {
  const step = numbers.length;

  // Check if the game has ended
  if (gameModel.isGameEnd(squares, numbers)) {
    // If the game has ended, calculate the winner
    return gameModel.calculateWinner(squares);
  }

  // If the game is still ongoing, display the current player's turn
  return (
    <div>
      <span className="status-title">
        {gameModel.color(step) === "white" ? "White" : "Black"} Turn
      </span>
    </div>
  );
};

const GameSummary: React.FC<IProps> = ({ squares, numbers }) => (
  <div className="info">
    <div className="count">
      <div className="info-content">
        <span className="black"></span> {gameModel.countBlackSquares(squares)}{" "}
      </div>
      <div className="info-content">
        <span>{status(squares, numbers)}</span>{" "}
      </div>
      <div className="info-content">
        <span className="white"></span> {gameModel.countWhiteSquares(squares)}{" "}
      </div>
    </div>
  </div>
);

export default GameSummary;
