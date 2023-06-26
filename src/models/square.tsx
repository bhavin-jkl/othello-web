import { LINE_COUNT } from "../constants/configurations";
import * as gameModel from "./game";

// Checks if the square is already occupied
export function canPlace(squares: any, number: number, step: number): boolean {
  if (squares[number] !== null) {
    return false;
  }
  const turnNumbersResult = turnNumbers(squares, number, step);
  return turnNumbersResult.length > 0;
}

export function canPlaceAny(squares: any, step: number): boolean {
  return Array(Math.pow(LINE_COUNT, 2))
    .fill(null)
    .some((_, index) => {
      if (squares[index + 1]) {
        return false;
      }
      return canPlace(squares, index + 1, step);
    });
}

// Takes the current state of the board and the square number where a piece is placed
// Determines the color of the current player based on the step
export function turnSquare(
  squares: (string | null)[],
  number: number,
  step: number
): (string | null)[] {
  const myColor = gameModel.color(step);
  const _turnNumbers = turnNumbers(squares, number, step);
  for (const i in _turnNumbers) {
    if (Object.prototype.hasOwnProperty.call(_turnNumbers, i)) {
      squares[_turnNumbers[i]] = myColor;
    }
  }
  return squares;
}

// Takes a square number and returns the row number it belongs to
function row(number: number): number {
  return Math.ceil(number / LINE_COUNT);
}

// Determines the squares that need to be flipped based on the placed piece
// Updates the squares array to reflect the flipped pieces
// Returns the updated squares array
function turnNumbers(
  squares: (string | null)[],
  number: number,
  step: number
): number[] {
  const myColor = gameModel.color(step);
  const upFactors = [0 - LINE_COUNT - 1, 0 - LINE_COUNT, 0 - LINE_COUNT + 1];
  const sideFactors = [0 - 1, 0 + 1];
  const downFactors = [LINE_COUNT - 1, LINE_COUNT, LINE_COUNT + 1];

  let _turnNumbers: number[] = [];
  let _number: number;
  let _numbers: number[];
  let _previousRowNumber: number;
  let _currentRowNumber: number;

  //down
  for (const i in upFactors) {
    if (!Object.prototype.hasOwnProperty.call(upFactors, i)) {
      continue;
    }

    _number = number;
    _numbers = [];
    let shouldContinue = true;
    while (shouldContinue) {
      _previousRowNumber = row(_number);
      _number += upFactors[i];
      _currentRowNumber = row(_number);
      if (
        squares[_number] === null ||
        _number < 1 ||
        _previousRowNumber === _currentRowNumber ||
        _previousRowNumber - _currentRowNumber > 1
      ) {
        shouldContinue = false;
        break;
      }
      if (squares[_number] === myColor) {
        _turnNumbers = _turnNumbers.concat(_numbers);
        shouldContinue = false;
        break;
      }
      _numbers.push(_number);
    }
  }

  // side
  for (const i in sideFactors) {
    if (!Object.prototype.hasOwnProperty.call(sideFactors, i)) {
      continue;
    }
    _number = number;
    _numbers = [];
    const condition = true;
    while (condition) {
      _previousRowNumber = row(_number);
      _number += sideFactors[i];
      _currentRowNumber = row(_number);
      if (
        squares[_number] === null ||
        _number < 1 ||
        _number > Math.pow(LINE_COUNT, 2) ||
        _previousRowNumber !== _currentRowNumber
      ) {
        break;
      }
      if (squares[_number] === myColor) {
        _turnNumbers = _turnNumbers.concat(_numbers);
        break;
      }
      _numbers.push(_number);
    }
  }

  // up
  for (const i in downFactors) {
    if (!Object.prototype.hasOwnProperty.call(downFactors, i)) {
      continue;
    }
    let _number: number = number;
    const _numbers: number[] = [];
    const condition = true;
    while (condition) {
      const _previousRowNumber: number = row(_number);
      _number += downFactors[i];
      const _currentRowNumber: number = row(_number);
      if (
        squares[_number] === null ||
        _number > Math.pow(LINE_COUNT, 2) ||
        _previousRowNumber === _currentRowNumber ||
        _currentRowNumber - _previousRowNumber > 1
      ) {
        break;
      }
      if (squares[_number] === myColor) {
        _turnNumbers = _turnNumbers.concat(_numbers);
        break;
      }
      _numbers.push(_number);
    }
  }

  return _turnNumbers;
}
