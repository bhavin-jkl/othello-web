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

// Function to initialize the squares
function initialSquares(): ISquare {
  const squares: ISquare = {};
  let i = 0;
  while (i < Math.pow(LINE_COUNT, 2)) {
    squares[i + 1] = null; // Set each square to null initially
    i++;
  }

  // Set the initial black and white squares based on the configurations
  for (const number of INITIAL_BLACK_NUMBERS) {
    squares[number] = BLACK;
  }
  for (const number of INITIAL_WHITE_NUMBERS) {
    squares[number] = WHITE;
  }
  return squares;
}

let step: number;

// Reducer function for squares
const squares = (
  state: ISquaresState = initialSquaresState, // Set the initial state if no state is provided
  action: { type: string; number: number } // Action object with type and number properties
): ISquaresState => {
  if (action.type !== actionTypes.SQUARE) {
    return state; // If the action type is not SQUARE, return the current state
  }

  const { histories, numbers } = state;
  let squares: any = Object.assign({}, histories[histories.length - 1]); // Create a copy of the latest squares object

  if (action.type === actionTypes.SQUARE) {
    const number = action.number;
    step = numbers.length;
    if (squares[number] || !squareModel.canPlace(squares, number, step)) {
      return state; // If the square is already occupied or cannot be placed, return the current state
    }

    squares[number] = gameModel.color(step); // Set the color of the square based on the step
    squares = squareModel.turnSquare(squares, number, step); // Turn the necessary squares based on the placed square
    histories.push(squares); // Add the updated squares to the history
    numbers.push(number); // Add the move number to the numbers array
  }

  let i = 1;
  while (i <= 2) {
    if (
      squareModel.canPlaceAny(squares, step + i) || // Check if there are any squares that can be placed in the next two steps
      gameModel.isGameEnd(squares, numbers) // Check if the game has ended
    ) {
      break;
    } else {
      histories.push(squares); // Add the current squares to the history
      numbers.push(0); // Add a default move number of 0
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
