import * as actionTypes from "../constants/actionTypes";

export const onSquareClick = (number) => {
  return {
    type: actionTypes.SQUARE,
    number,
  };
};

// import * as actionTypes from "../constants/actionTypes";

// export interface SquareAction {
//   type: actionTypes.SQUARE;
//   number: number;
// }

// export const onSquareClick = (number: number): SquareAction => {
//   return {
//     type: actionTypes.SQUARE,
//     number,
//   };
// };
