interface Props {
  items?: Item;
  filteredItems?: string;
  checkedItemsForFilter?: string[];
}
interface Item {
  id?: string;
  producer?: string;
  name?: string;
  display?: Array<Object>;
  CPU?: string;
  OS?: string;
  RAM?: Array<Object>;
  storageCapacity?: string;
  graphicsCard?: Array<Object>;
  corps?: string;
  weight?: string;
  battery?: string;
  dimensions?: string;
  connection?: Array<Object>;
  producingCountry?: string;
  additionalFeatures?: string[];
  countryRegistration?: string;
  guarantee?: string;
  price?: string;
  quantity?: number;
}

export const getAllItems = (state: any) => {
  return state.items;
};

export const getFilteredItems = (state: any) => {
  let uniqItems = [];
  const filteredValue = state.checkedItemsForFilter;
  const allItems = getAllItems(state);
  for (const value of filteredValue) {
    uniqItems.push(...allItems.filter((item: Item) => item.producer === value));
  }
  if (uniqItems.length > 0) {
    return uniqItems;
  } else {
    return allItems;
  }
};
