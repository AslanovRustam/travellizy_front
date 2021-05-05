import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import db from "../db.json";

const itemsReducer = (state = db, action) => {
  return state;
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "filter":
      return payload;
    default:
      return 1;
  }
};

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
