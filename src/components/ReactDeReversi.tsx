import React from "react";
import Board from "../components/Board";
import GameSummary from "./GameSummary";

type Squares = {
  histories: any;
  numbers: number[];
};

type Actions = {
  onSquareClick: (number: number) => void;
};

type ReactDeReversiProps = {
  squares: Squares;
  actions: Actions;
};

const ReactDeReversi: React.FC<ReactDeReversiProps> = ({
  squares,
  actions,
}) => {
  const currentSquares = squares.histories[squares.histories.length - 1];
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

export default ReactDeReversi;
