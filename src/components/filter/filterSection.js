import { useState } from "react";
import s from "./filterSection.module.css";
export default function FilterSrction({ items }) {
  function uniqProducers(items) {
    const arrOfUniq = [];
    items.forEach((item) => {
      if (arrOfUniq.includes(item.producer)) {
        return;
      }
      arrOfUniq.push(item.producer);
    });
    return arrOfUniq;
  }
  let arrOfUniqItems = uniqProducers(items);
  console.log(arrOfUniqItems);

  const [filterInput, setFilterInput] = useState("");
  const filterInputTLC = filterInput.toLowerCase().trim();

  const arrOfUniqItemsTLC = arrOfUniqItems.join().toLowerCase().split(",");
  // console.log(arrOfUniqItemsTLC);
  let filteredItems = [];
  arrOfUniqItemsTLC.forEach((e) => {
    if (e.includes(filterInputTLC)) {
      e.split();
      const newE = e[0].toUpperCase() + e.slice(1);
      filteredItems.push(newE);
    }
    return;
  });
  console.log(`newArr: ${filteredItems}`);
  // if (arrOfUniqItemsTLC.includes(filterInputTLC)) {
  //   console.log("hello");
  // }
  // if (arrOfUniqItems.includes(filterInput)) {
  //   console.log(`11111${filterInput}`);
  // }
  return (
    <>
      <div className={s.filterSection}>
        <div className={s.producersRow}>
          <span>Алфавитный указатель</span>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="enter your search input"
              // value={filterInput}
              onChange={(e) => setFilterInput(e.currentTarget.value)}
            />
          </label>
        </div>
        <ul>
          {/* {arrOfUniqItems.map((item) => ( */}
          {filteredItems.map((item) => (
            <li key={item}>
              <label className={s.itemOfProducerList}>
                <input type="checkbox" name="filter" value={item} />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
