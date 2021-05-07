import Card from "./card";
import s from "./card.module.css";
import { connect } from "react-redux";
import { getFilteredItems } from "../../redux/selectors";
import { useSelector } from "react-redux";

function ListOfCard({ items }) {
  const filteredItems = useSelector(getFilteredItems);
  console.log(filteredItems);
  return (
    <div className={s.listOfCard}>
      <ul className={s.itemsContainer}>
        {filteredItems.map((item) => (
          <li key={item.id} className={s.cardContainer}>
            <Card
              name={item.name}
              url={item.url}
              price={item.price}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(ListOfCard);
