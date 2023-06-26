import React from "react";
import Square from "./Square";
import { LINE_COUNT } from "../constants/configurations";
import * as squareModel from "../models/square";

type BoardProps = {
  squares: [];
  step: number;
  onClick: (number: number) => void;
};

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
  while (row < LINE_COUNT) {
    const rowSquares: JSX.Element[] = [];
    column = 0;
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
    boardBody.push(
      <div key={"board-body-row-" + (row + 1)} className="body-row">
        {rowSquares}
      </div>
    );
    row++;
  }

  return (
    <div className="board">
      <div className="body">{boardBody}</div>
    </div>
  );
};

export default Board;

// import React from "react";
// import Square from "./Square";
// import { LINE_COUNT } from "../constants/configurations";
// import * as squareModel from "../models/square";

// const renderSquare = (squares, number, canPlace, onClick) => {
//   return (
//     <Square
//       key={"square-" + number}
//       value={squares[number]}
//       canPlace={canPlace}
//       onClick={() => onClick(number)}
//       num={number}
//     />
//   );
// };

// const Board = ({ squares, step, onClick }) => {
//   let boardBody = [];
//   let column = 0;
//   let row = 0;
//   while (row < LINE_COUNT) {
//     let rowSquares = [];
//     column = 0;
//     while (column < LINE_COUNT) {
//       const number = row * LINE_COUNT + column + 1;
//       rowSquares.push(
//         renderSquare(
//           squares,
//           number,
//           squareModel.canPlace(squares, number, step),
//           onClick
//         )
//       );
//       column++;
//     }
//     boardBody.push(
//       <div key={"board-body-row-" + (row + 1)} className="body-row">
//         {rowSquares}
//       </div>
//     );
//     row++;
//   }

//   return (
//     <div className="board">
//       <div className="body">{boardBody}</div>
//     </div>
//   );
// };

// export default Board;
