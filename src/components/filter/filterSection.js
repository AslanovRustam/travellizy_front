import { useState, useCallback } from "react";
import s from "./filterSection.module.css";
import itemsActions from "../../redux/action";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../redux/selectors";

export default function FilterSrction({ onChangeFilter, filter }) {
  // const [checked, setChecked] = useState([]);
  const checkedArrAfterFilter = useSelector(
    (state) => state.checkedItemsForFilter
  );
  const items = useSelector(getAllItems);
  const dispatch = useDispatch();

  // function onChangeFilter(event) {
  //   // const arrOfCheked = [];
  //   // if (event.target.checked) {
  //   if (event.target.checked) {
  //     // console.log(event.target.name);
  //     // arrOfCheked.push(event.target.name);
  //     // setChecked([...checked, event.target.name]);
  //     dispatch()
  //   } else {
  //     const updatedChecked = checked.filter(
  //       (item) => item !== event.target.name
  //     );
  //     setChecked(updatedChecked);
  //   }
  // }
  const onChangeFilterChecked = useCallback(
    (event) => {
      // console.log(event.target.name);
      if (event.target.checked) {
        // console.log(checkedArrAfterFilter);
        dispatch(itemsActions.checkedItemsForFilter(event.target.name));
      } else {
        dispatch(itemsActions.unCheckedItemsForFilter(event.target.name));
      }

      // dispatch(itemsActions.checkedItemsForFilter([]));
    },
    [dispatch]
  );

  // dispatch(itemsActions.checkedItemsForFilter([]));

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

  const arrOfUniqItemsTLC = arrOfUniqItems.join().toLowerCase().split(",");
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

  let uniqItems = [];
  function newItems(items) {
    for (let i = 0; i < items.length; i++) {
      if (filteredItems.includes(items[i].producer)) {
        uniqItems.push(items[i]);
      }
    }
  }
  const renderItems = newItems(items);
  console.log(uniqItems);

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
              value={filterInput}
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
                  // defaultChecked
                  onChange={onChangeFilterChecked}
                  // onChange={(e) => onChangeFilter(e.currentTarget.value)}
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
    filter: state.filter,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   onChangeFilter: (e) => dispatch(itemsActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps)(FilterSrction);
