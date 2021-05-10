import { createAction } from "@reduxjs/toolkit";

interface IFilterItem {
  type: string;
  payload: string;
}

// const filterItem = createAction<string>("filter");
const filterItem = (text: string): IFilterItem => ({
  type: "filter",
  payload: text,
});

const checkedItemsForFilter = createAction<string>(
  "filter_checkedItemsForFilter"
);
// interface IFilterChecked {
//   type: string;
//   payload: boolean;
// }
// const checkedItemsForFilter = (text: boolean): IFilterChecked => ({
//   type: "filter_checkedItemsForFilter",
//   payload: text,
// });

const unCheckedItemsForFilter = createAction<string>(
  "filter_unCheckedItemsForFilter"
);

export default { filterItem, checkedItemsForFilter, unCheckedItemsForFilter };
