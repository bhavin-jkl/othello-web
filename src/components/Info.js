// import React from "react";
// import * as gameModel from "../models/game";

// interface Props {
//   squares: string[];
//   numbers: number[];
// }

// const status = (squares: string[], numbers: number[]): React.ReactNode => {
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

// const Info: React.FC<Props> = ({ squares, numbers }) => (
//   <div className="info">
//     <span>{status(squares, numbers)}</span>
//     <div className="count">
//       <span className="black"></span> {gameModel.countBlack(squares)} -{" "}
//       {gameModel.countWhite(squares)} <span className="white"></span>
//     </div>
//   </div>
// );

// export default Info;

import React from "react";
import * as gameModel from "../models/game";

const status = (squares, numbers) => {
  const step = numbers.length;
  if (gameModel.isGameEnd(squares, numbers)) {
    return gameModel.calculateWinner(squares);
  }
  return (
    <div>
      {"Next player: "}
      <span className={gameModel.color(step)}></span>
    </div>
  );
};

const Info = ({ squares, numbers, onClick }) => (
  <div className="info">
    <span>{status(squares, numbers)}</span>
    <div className="count">
      <span className="black"></span> {gameModel.countBlack(squares)} -{" "}
      {gameModel.countWhite(squares)} <span className="white"></span>
    </div>
  </div>
);

export default Info;
