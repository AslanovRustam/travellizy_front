import Card from "./card";
import s from "./card.module.css";
import { getFilteredItems } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  url: string;
  price: string;
  quantity: number;
}

export default function ListOfCard() {
  const filteredItems = useSelector(getFilteredItems);
  // console.log(filteredItems);
  return (
    <div className={s.listOfCard}>
      <ul className={s.itemsContainer}>
        {filteredItems.map((item: Props) => (
          <li key={item.id} className={s.cardContainer}>
            <Link to={`/travellizy_front/${item.name}`}>
              <Card
                name={item.name}
                url={item.url}
                price={item.price}
                quantity={item.quantity}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// import { connect } from "react-redux";
// const mapStateToProps = (state) => {
//   return {
//     items: state.items,
//   };
// };

// export default connect(mapStateToProps)(ListOfCard);
