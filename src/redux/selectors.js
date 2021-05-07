export const getAllItems = (state) => {
  return state.items;
};

export const getFilteredItems = (state) => {
  let uniqItems = [];
  const filteredValue = state.checkedItemsForFilter;
  const allItems = getAllItems(state);
  for (const value of filteredValue) {
    uniqItems.push(...allItems.filter((item) => item.producer === value));
  }
  if (uniqItems.length > 0) {
    return uniqItems;
  } else {
    return allItems;
  }
};
