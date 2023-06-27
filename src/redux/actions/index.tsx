import { Action } from "redux";

// Define the action types
enum ActionTypes {
  SQUARE = "SQUARE",
}

// Define the action interfaces
interface ISquareAction extends Action<ActionTypes> {
  type: ActionTypes.SQUARE;
  number: number;
}

// Create the action creators
export const onSquareClick = (number: number): ISquareAction => {
  return {
    type: ActionTypes.SQUARE,
    number,
  };
};
