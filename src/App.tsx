import React from "react";
import { Provider } from "react-redux";
import OthelloContainer from "./containers/OthelloContainer";
import reducer from "./redux/reducers";
import "./assets/stylesheets/sanitize.min.css";
import "./assets/stylesheets/index.css";
import "./assets/stylesheets/main.css";
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
