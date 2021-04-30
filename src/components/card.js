import defaultImg from "../images/default.png";
import s from "./card.module.css";
export default function Card({ name, url, price, quantity }) {
  return (
    <>
      <a target="_blank" href="{}">
        <img src={defaultImg} alt={name} width="380" height="214" />
        <div>
          <span className={s.itemName}>{name}</span>
        </div>
        <div>
          <span>{price}</span>
          <span className={s.icon}> ₴</span>
        </div>
        <div>
          <span>{quantity > 50 ? "В наличии" : "Заканчивается"}</span>
        </div>
      </a>
    </>
  );
}