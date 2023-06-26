import { Provider } from "react-redux";
import ReactDeReversiContainer from "./containers/ReactDeReversiContainer";
import reducer from "./reducers";
import "./assets/stylesheets/sanitize.min.css";
import "./assets/stylesheets/index.css";
import "./assets/stylesheets/ReactDeReversi.css";
var createReduxStore = require("create-redux-store");

function App() {
  const store = createReduxStore(reducer);
  return (
    <Provider store={store}>
      <ReactDeReversiContainer />
    </Provider>
  );
}

export default App;
