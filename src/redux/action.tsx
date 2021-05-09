import { createAction } from "@reduxjs/toolkit";

const filterItem = createAction("filter");

const checkedItemsForFilter = createAction("filter_checkedItemsForFilter");

const unCheckedItemsForFilter = createAction("filter_unCheckedItemsForFilter");

export default { filterItem, checkedItemsForFilter, unCheckedItemsForFilter };
