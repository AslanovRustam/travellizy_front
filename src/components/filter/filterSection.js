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

  return (
    <>
      <div className={s.filterSection}>
        <div className={s.producersRow}>
          <span>Алфавитный указатель</span>
        </div>
        <ul>
          {uniqProducers(items).map((item) => (
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
