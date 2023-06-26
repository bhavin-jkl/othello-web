import React from "react";
import { Provider } from "react-redux";
import OthelloContainer from "./containers/OthelloContainer";
import reducer from "./redux/reducers";
import "./style/index.css";
const createReduxStore = require("create-redux-store");

function App(): JSX.Element {
  const store = createReduxStore(reducer);
  return (
    <Provider store={store}>
      <OthelloContainer />
    </Provider>
  );
}

export default App;
