// import React from "react";
// import Board from "./Board";
// import Info from "./Info";

// interface Props {
//   squares: {
//     histories: string[][];
//     numbers: number[];
//   };
//   actions: {
//     onSquareClick: (number: number) => void;
//   };
// }

// const ReactDeReversi: React.FC<Props> = ({ squares, actions }) => {
//   const currentSquares = squares.histories[squares.histories.length - 1];
//   const step = squares.numbers.length;
//   return (
//     <div className="ReactDeReversi">
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={currentSquares}
//             step={step}
//             onClick={(number) => actions.onSquareClick(number)}
//           />
//         </div>
//         <div className="game-info">
//           <Info squares={currentSquares} numbers={squares.numbers} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReactDeReversi;

import React from "react";
import Board from "../components/Board";
import Info from "../components/Info";

const ReactDeReversi = ({ squares, actions }) => {
  const currentSquares = squares.histories[squares.histories.length - 1];
  const step = squares.numbers.length;
  return (
    <div className="ReactDeReversi">
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentSquares}
            step={step}
            onClick={(number) => actions.onSquareClick(number)}
          />
        </div>
        <div className="game-info">
          <Info squares={currentSquares} numbers={squares.numbers} />
        </div>
      </div>
    </div>
  );
};

export default ReactDeReversi;
