import React from "react";
import Board from "./Board";
import GameSummary from "./GameSummary";

type Squares = {
  histories: any;
  numbers: number[];
};

type Actions = {
  onSquareClick: (number: number) => void;
};

type MainGameBoardProps = {
  squares: Squares;
  actions: Actions;
};

const MainGameBoard: React.FC<MainGameBoardProps> = ({ squares, actions }) => {
  const currentSquares = squares.histories[squares.histories.length - 1];

  // Get the current step based on the number of moves made
  const step = squares.numbers.length;

  return (
    <div className="ReactDeReversi">
      <div className="game">
        <div className="game-board">
          <div className="game-info">
            <GameSummary squares={currentSquares} numbers={squares.numbers} />
          </div>
          <Board
            squares={currentSquares}
            step={step}
            onClick={(number) => actions.onSquareClick(number)}
          />
        </div>
      </div>
    </div>
  );
};

export default MainGameBoard;
