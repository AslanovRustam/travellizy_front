import { useState, useCallback } from "react";
import s from "./filterSection.module.css";
import itemsActions from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../redux/selectors";

type IItems = Item[];
interface Item {
  id?: string;
  producer: string;
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

export default function FilterSrction() {
  const items = useSelector(getAllItems);
  const dispatch = useDispatch();

  const onChangeFilterChecked = useCallback(
    (event) => {
      if (event.target.checked) {
        dispatch(itemsActions.checkedItemsForFilter(event.target.name));
      } else {
        dispatch(itemsActions.unCheckedItemsForFilter(event.target.name));
      }
    },
    [dispatch]
  );

  function uniqProducers(items: IItems) {
    const arrOfUniq: string[] = [];
    items.forEach((item) => {
      if (arrOfUniq.includes(item.producer)) {
        return;
      }
      arrOfUniq.push(item.producer);
    });
    return arrOfUniq;
  }
  let arrOfUniqItems = uniqProducers(items);
  // console.log(arrOfUniqItems);

  const [filterInput, setFilterInput] = useState("");
  const filterInputTLC = filterInput.toLowerCase().trim();
  let filteredItems: string[] = [];

  const arrOfUniqItemsTLC = arrOfUniqItems.join().toLowerCase().split(",");
  arrOfUniqItemsTLC.forEach((e) => {
    if (e.includes(filterInputTLC)) {
      e.split("");
      const newE = e[0].toUpperCase() + e.slice(1);
      filteredItems.push(newE);
      // window.localStorage.setItem("filter", JSON.stringify(filteredItems));
    }
    return;
  });
  // console.log(`newArr: ${filteredItems}`);

  return (
    <>
      <div className={s.filterSection}>
        <div className={s.producersRow}>
          <span>???????????????????? ??????????????????</span>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="enter your search input"
              value={filterInput}
              onChange={(e) => setFilterInput(e.currentTarget.value)}
            />
          </label>
        </div>
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>
              <label className={s.itemOfProducerList}>
                <input
                  type="checkbox"
                  name={item}
                  value={item}
                  onChange={onChangeFilterChecked}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// let uniqItems = [];
// function newItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     if (filteredItems.includes(items[i].producer)) {
//       uniqItems.push(items[i]);
//     }
//   }
// }
// const renderItems = newItems(items);
// console.log(uniqItems);
