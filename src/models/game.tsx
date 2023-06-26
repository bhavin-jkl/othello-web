import { LINE_COUNT, BLACK, WHITE } from "../constants/configurations";

export function color(step: number): string {
  // Determine the color based on the current step
  return isBlackMove(step) ? BLACK : WHITE;
}

export function countBlack(squares: { [key: number]: string | null }): number {
  let count = 0;
  for (const i in squares) {
    if (squares[i] === BLACK) {
      count++;
    }
  }
  return count;
}

export function countWhite(squares: { [key: number]: string | null }): number {
  let count = 0;
  for (const i in squares) {
    if (squares[i] === WHITE) {
      count++;
    }
  }
  return count;
}

export function isBlackMove(step: number): boolean {
  // Check if it's a black player's move based on the step count
  if (step === 0) {
    return false;
  }
  return step % 2 !== 0;
}

export function isGameEnd(
  squares: { [key: number]: string | null },
  numbers: number[]
): boolean {
  // Check if the game has ended
  if (numbers[numbers.length - 1] === 0 && numbers[numbers.length - 2] === 0) {
    // If the last two moves were 0, it indicates that both players passed
    return true;
  }
  return isFilled(squares); // Check if all squares are filled
}

export function calculateWinner(squares: {
  [key: number]: string | null;
}): string {
  // Calculate the winner based on the count of black and white squares
  const blackCount = countBlack(squares);
  const whiteCount = countWhite(squares);
  if (blackCount > whiteCount) {
    return "Winner: " + BLACK.toUpperCase() + " !!";
  } else if (blackCount < whiteCount) {
    return "Winner: " + WHITE.toUpperCase() + " !!";
  } else {
    return "Draw...";
  }
}

function isFilled(squares: { [key: number]: string | null }): boolean {
  // Check if all squares are filled with a non-null value
  const totalSquares = Math.pow(LINE_COUNT, 2);

  for (let i = 1; i <= totalSquares; i++) {
    if (squares[i] === null) {
      return false; // If any square is null, return false
    }
  }
  return true; // If all squares are filled, return true
}
