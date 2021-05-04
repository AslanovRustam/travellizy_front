import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import db from "../db.json";

const itemsReducer = (state = db, action) => {
  return state;
};

const rootReducer = combineReducers({ items: itemsReducer });
const store = createStore(rootReducer, composeWithDevTools());

export default store;
