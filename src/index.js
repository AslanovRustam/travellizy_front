import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import actions from "./redux/action";

store.dispatch(actions.changeFilter(25));
// store.dispatch(actions.myAction(5));
// store.dispatch(actions.myAction2);
// console.log(actions.myAction);
// console.log(actions.myAction2);
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
