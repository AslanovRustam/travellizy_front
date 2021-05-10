import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import db from "../db.json";
import actions from "./action";
import { createReducer } from "@reduxjs/toolkit";

const itemsReducer = (state = db, _action: null) => {
  return state;
};
const filterReducer = createReducer<string>("", {
  [actions.filterItem.toString()]: (_state, action) => {
    return action.payload;
  },
});

const initialState: string[] = [];
const checkedItemsForFilterReducer = createReducer(initialState, {
  [actions.checkedItemsForFilter.toString()]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.unCheckedItemsForFilter.toString()]: (state, { payload }) => {
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

// const initialFilter: string = "";
// interface IFilterItem {
//   type: string;
//   payload: string;
// }
// const filterReducer = (_state: Array<Object>, action: IFilterItem) => {
//   switch (action.type) {
//     case "filter":
//       return action.payload;
//     default:
//       return initialFilter;
//   }
// };
