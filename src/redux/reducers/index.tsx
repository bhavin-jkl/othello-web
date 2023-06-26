import { combineReducers } from "redux";
import squares from "./squares";

// interface RootState {
//   // Define your root state properties here
// }

const reducer: any = combineReducers({
  squares,
});

export default reducer;

// import { combineReducers } from "redux";
// import squares from "./squares.js";

// const reducer = combineReducers({
//   squares,
// });

// export default reducer;
