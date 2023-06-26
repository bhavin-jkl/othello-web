import React from "react";
import * as gameModel from "../models/game";

interface IProps {
  squares: string[];
  numbers: number[];
}

const status = (squares: string[], numbers: number[]): React.ReactNode => {
  const step = numbers.length;
  if (gameModel.isGameEnd(squares, numbers)) {
    return gameModel.calculateWinner(squares);
  }
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
      <div>
        <span className="black"></span> {gameModel.countBlack(squares)}{" "}
      </div>
      <div>
        <span>{status(squares, numbers)}</span>{" "}
      </div>
      <div>
        <span className="white"></span> {gameModel.countWhite(squares)}{" "}
      </div>
    </div>
  </div>
);

export default GameSummary;

// import React from "react";
// import * as gameModel from "../models/game";

// const status = (squares, numbers) => {
//   const step = numbers.length;
//   if (gameModel.isGameEnd(squares, numbers)) {
//     return gameModel.calculateWinner(squares);
//   }
//   return (
//     <div>
//       {"Next player: "}
//       <span className={gameModel.color(step)}></span>
//     </div>
//   );
// };

// const Info = ({ squares, numbers, onClick }) => (
//   <div className="info">
//     <span>{status(squares, numbers)}</span>
//     <div className="count">
//       <span className="black"></span> {gameModel.countBlack(squares)} -{" "}
//       {gameModel.countWhite(squares)} <span className="white"></span>
//     </div>
//   </div>
// );

// export default Info;
