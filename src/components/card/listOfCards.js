import Card from "./card";
import s from "./card.module.css";
import { connect } from "react-redux";

function ListOfCard({ items }) {
  return (
    <div className={s.listOfCard}>
      <ul className={s.itemsContainer}>
        {items.map((item) => (
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
