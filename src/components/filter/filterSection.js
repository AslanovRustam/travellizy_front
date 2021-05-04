import { useState } from "react";
import s from "./filterSection.module.css";

import { connect } from "react-redux";

function FilterSrction({ items, changeFilter }) {
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
  let filteredItems = [];

  // const arrFilteredItems = [];
  // const filteredItemsforRender = (items) => {
  //   items.forEach((item) => {
  //     if (item.producer.includes(filteredItems)) {
  //       arrFilteredItems.push(item);
  //       return;
  //     }
  //     return;
  //   });
  // };
  // filteredItemsforRender(items);
  // console.log(arrFilteredItems);
  const arrOfUniqItemsTLC = arrOfUniqItems.join().toLowerCase().split(",");
  // console.log(arrOfUniqItemsTLC);
  // let filteredItems = [];
  arrOfUniqItemsTLC.forEach((e) => {
    if (e.includes(filterInputTLC)) {
      e.split();
      const newE = e[0].toUpperCase() + e.slice(1);
      filteredItems.push(newE);
      window.localStorage.setItem("filter", JSON.stringify(filteredItems));
    }
    return;
  });
  console.log(`newArr: ${filteredItems}`);

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
                <input
                  type="checkbox"
                  name={item}
                  value={item}
                  defaultChecked
                  onChange={changeFilter}
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

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(FilterSrction);
