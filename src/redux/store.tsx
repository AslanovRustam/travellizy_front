import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import db from "../db.json";
import actions from "./action";
import { createReducer } from "@reduxjs/toolkit";

const itemsReducer = (state = db, _action: any) => {
  return state;
};
// const filterReducer = createReducer<string>("", {
//   [actions.filterItem]: (_state, action) => {
//     return action.payload;
//   },
// });
const initialFilter: string = "";
interface IFilterItem {
  type: string;
  payload: string;
}
const filterReducer = (state: Array<Object>, action: IFilterItem) => {
  switch (action.type) {
    case "filter":
      return action.payload;
    default:
      return initialFilter;
  }
};

interface ICheckedFilterItem {
  type: string;
  payload: string[];
}
interface IFilterItemChecked {
  payload: string;
}
const checkedItemsForFilterReducer = (
  state: Array<Object>,
  action: ICheckedFilterItem
) => {
  switch (action.type) {
    case "filter_checkedItemsForFilter":
      return (state: string[], { payload }: IFilterItemChecked) => {
        return [...state, payload];
      };
    case "filter_unCheckedItemsForFilter":
      return (state: string[], { payload }: IFilterItemChecked) => {
        return state.filter((item) => item !== payload);
      };
    default:
      return initialFilter;
  }
};
// const checkedItemsForFilterReducer = createReducer([], {
//   [actions.checkedItemsForFilter]: (state, { payload }) => {
//     return [...state, payload];
//   },
//   [actions.unCheckedItemsForFilter]: (state, { payload }) => {
//     return state.filter((item) => item !== payload);
//   },
// });

const rootReducer = combineReducers({
  items: itemsReducer,
  filteredItems: filterReducer,
  checkedItemsForFilter: checkedItemsForFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
