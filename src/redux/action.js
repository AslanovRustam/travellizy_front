import { createAction } from "@reduxjs/toolkit";

// const myAction = (value) => {
//   return {
//     type: "MY_ACTION",
//     payload: value,
//   };
// };

const filterItem = createAction("filter");
// const changeFilter = (value) => ({
//   type: "filter",
//   payload: value,
// });

const checkedItemsForFilter = createAction("filter_checkedItemsForFilter");

const unCheckedItemsForFilter = createAction("filter_unCheckedItemsForFilter");

export default { filterItem, checkedItemsForFilter, unCheckedItemsForFilter };
