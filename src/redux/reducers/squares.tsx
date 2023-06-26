import {
  LINE_COUNT,
  INITIAL_BLACK_NUMBERS,
  INITIAL_WHITE_NUMBERS,
} from "../../constants/configurations";
import { BLACK, WHITE } from "../../constants/configurations";
import * as actionTypes from "../../constants/configurations";
import * as gameModel from "../../models/game";
import * as squareModel from "../../models/square";

interface ISquare {
  [key: number]: string | null;
}

interface ISquaresState {
  histories: ISquare[];
  numbers: number[];
}

const initialSquaresState: ISquaresState = {
  histories: [initialSquares()],
  numbers: [0],
};

function initialSquares(): ISquare {
  const squares: ISquare = {};
  let i = 0;
  while (i < Math.pow(LINE_COUNT, 2)) {
    squares[i + 1] = null;
    i++;
  }

  for (const number of INITIAL_BLACK_NUMBERS) {
    squares[number] = BLACK;
  }
  for (const number of INITIAL_WHITE_NUMBERS) {
    squares[number] = WHITE;
  }
  return squares;
}
let step: number;

const squares = (
  state: ISquaresState = initialSquaresState,
  action: { type: string; number: number }
): ISquaresState => {
  if (action.type !== actionTypes.SQUARE) {
    return state;
  }

  const { histories, numbers } = state;
  let squares: any = Object.assign({}, histories[histories.length - 1]);

  if (action.type === actionTypes.SQUARE) {
    const number = action.number;
    step = numbers.length;

    if (squares[number] || !squareModel.canPlace(squares, number, step)) {
      return state;
    }

    squares[number] = gameModel.color(step);
    squares = squareModel.turnSquare(squares, number, step);
    histories.push(squares);
    numbers.push(number);
  }

  let i = 1;
  while (i <= 2) {
    if (
      squareModel.canPlaceAny(squares, step + i) ||
      gameModel.isGameEnd(squares, numbers)
    ) {
      break;
    } else {
      histories.push(squares);
      numbers.push(0);
      i++;
    }
  }

  return {
    ...state,
    histories: histories,
    numbers: numbers,
  };
};

export default squares;

// import {
//   LINE_COUNT,
//   INITIAL_BLACK_NUMBERS,
//   INITIAL_WHITE_NUMBERS,
// } from "../constants/configurations";
// import { BLACK, WHITE } from "../constants/discColors";
// import * as actionTypes from "../constants/actionTypes";
// import * as gameModel from "../models/game";
// import * as squareModel from "../models/square";

// const initialSquaresState = {
//   histories: [initialSquares()],
//   numbers: [0],
// };

// function initialSquares() {
//   let squares = {};
//   let i = 0;
//   while (i < Math.pow(LINE_COUNT, 2)) {
//     squares[i + 1] = null;
//     i++;
//   }

//   for (let number of INITIAL_BLACK_NUMBERS) {
//     squares[number] = BLACK;
//   }
//   for (let number of INITIAL_WHITE_NUMBERS) {
//     squares[number] = WHITE;
//   }
//   return squares;
// }

// const squares = (state = initialSquaresState, action) => {
//   if (action.type !== actionTypes.SQUARE) {
//     return state;
//   }

//   let { histories, numbers } = state;
//   let squares = Object.assign({}, histories[histories.length - 1]);
//   let step;

//   if (action.type === actionTypes.SQUARE) {
//     const number = action.number;
//     step = numbers.length;

//     if (squares[number] || !squareModel.canPlace(squares, number, step)) {
//       return state;
//     }

//     squares[number] = gameModel.color(step);
//     squares = squareModel.turnSquare(squares, number, step);
//     histories.push(squares);
//     numbers.push(number);
//   }

//   let i = 1;
//   while (i <= 2) {
//     if (
//       squareModel.canPlaceAny(squares, step + i) ||
//       gameModel.isGameEnd(squares, numbers)
//     ) {
//       break;
//     } else {
//       histories.push(squares);
//       numbers.push(0);
//       i++;
//     }
//   }

//   return {
//     ...state,
//     histories: histories,
//     numbers: numbers,
//   };
// };

// export default squares;
