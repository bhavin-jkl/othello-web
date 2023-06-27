import { LINE_COUNT, BLACK, WHITE } from "../constants/configurations";

export function color(step: number): string {
  // Determine the color based on the current step
  const colorName = isBlackMove(step) ? BLACK : WHITE;
  return colorName;
}

export function isBlackMove(step: number): boolean {
  // Check if it's a black player's move based on the step count
  if (step === 0) {
    return false;
  }
  return step % 2 !== 0;
}

// Count the black square
export function countBlackSquares(squares: {
  [key: number]: string | null;
}): number {
  let count = 0;

  for (const key in squares) {
    if (squares[key] === BLACK) {
      count++;
    }
  }
  return count;
}

// Count the white square
export function countWhiteSquares(squares: {
  [key: number]: string | null;
}): number {
  let count = 0;

  for (const key in squares) {
    if (squares[key] === WHITE) {
      count++;
    }
  }

  return count;
}

// Calculate the winner based on the count of black and white squares
export function calculateWinner(squares: {
  [key: number]: string | null;
}): string {
  const blackCount = countBlackSquares(squares);
  const whiteCount = countWhiteSquares(squares);

  if (blackCount > whiteCount) {
    return "Winner: BLACK !!";
  } else if (blackCount < whiteCount) {
    return "Winner is WHITE !!";
  } else {
    return "Game is a draw...";
  }
}

// Check if the game has ended
export function isGameEnd(
  squares: { [key: number]: string | null },
  numbers: number[]
): boolean {
  if (numbers[numbers.length - 1] === 0 && numbers[numbers.length - 2] === 0) {
    return true;
  }
  return isFilled(squares);
}

// Check if all squares are filled or not
function isFilled(squares: { [key: number]: string | null }): boolean {
  const totalSquares = Math.pow(LINE_COUNT, 2);

  for (let i = 1; i <= totalSquares; i++) {
    if (squares[i] === null) {
      return false;
    }
  }
  return true;
}
