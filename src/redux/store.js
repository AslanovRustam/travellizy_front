import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import db from "../db.json";
import actions from "./action";
import { createReducer } from "@reduxjs/toolkit";

const itemsReducer = (state = db, action) => {
  // console.log("лог экшена в редюсер", action);
  return state;
};
const filterReducer = createReducer("", {
  [actions.filterItem]: (_state, action) => {
    return action.payload;
  },
});

const checkedItemsForFilterReducer = createReducer([], {
  [actions.checkedItemsForFilter]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.unCheckedItemsForFilter]: (state, { payload }) => {
    return state.filter((item) => item !== payload);
  },
});

const rootReducer = combineReducers({
  items: itemsReducer,
  filteredItems: filterReducer,
  checkedItemsForFilter: checkedItemsForFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case "filter":
//       return payload;
//     default:
//       return state;
//   }
// };

// const store = createStore(rootReducer, composeWithDevTools());

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case actions.changeFilter.type:
//       return console.log("лог экшена filterReducer в редюсер", action);
//     default:
//       return state;
//   }
// };
