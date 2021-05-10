import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllItems } from "../../redux/selectors";
import s from "./cardDetail.module.css";
import defaultImg from "../../images/default.png";

interface Item {
  name: string;
}

type Element = string;

export default function CardDetail() {
  // const params = useParams();
  // const { itemName } = useParams<Params>();
  const { itemName } = useParams<{ itemName: string }>();

  const items = useSelector(getAllItems);
  const currentItem = items.find((item: Item) => item.name === itemName);
  return (
    <div>
      <h1>{currentItem.name}</h1>
      <div className={s.cardDetailsMainInfo}>
        <img
          src={currentItem.url ? currentItem.url : defaultImg}
          alt={currentItem.name}
        />
        <div className={s.priceContainer}>
          <span>{currentItem.price}</span>
          <span className={s.icon}> ₴</span>
          <div className={s.quantityContainer}>
            <span>
              {currentItem.quantity > 10 ? "В наличии" : "Заканчивается"}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2>Экран</h2>
        <p>Диагональ экрана .... {currentItem.display[0].diagonal}</p>
        <p>Тип экрана .... {currentItem.display[1].screenType}</p>
        <p>
          Частота обновления экрана ....{" "}
          {currentItem.display[2].displayFrequency}
        </p>
      </div>
      <div>
        <h2>Процессор</h2>
        <p>Процессор .... {currentItem.CPU}</p>
        <p>Операционная система .... {currentItem.OS}</p>
      </div>
      <div>
        <h2>Оперативная память</h2>
        <p>Объем оперативной памяти .... {currentItem.RAM[0].volume}</p>
        <p>Тип оперативной памяти .... {currentItem.RAM[1].type}</p>
      </div>
      <div>
        <h2>Накопители данных</h2>
        <p>Объём накопителя .... {currentItem.storageCapacity}</p>
      </div>
      <div>
        <h2>Видеокарта</h2>
        <p>Объем памяти видеокарты .... {currentItem.graphicsCard[0].volume}</p>
        <p>Видеокарта .... {currentItem.graphicsCard[1].nameGraphCard}</p>
      </div>
      <div>
        <h2>Корпус</h2>
        <p>Цвет .... {currentItem.corps}</p>
        <p>Вес .... {currentItem.weight}</p>
        <p>Батарея .... {currentItem.battery}</p>
        <p>Габариты (Ш х Г х В) .... {currentItem.dimensions}</p>
      </div>
      <div>
        <h2>Подключение</h2>
        <h3>Сетевые адаптеры:</h3>
        <p>
          {" "}
          {currentItem.connection[0].networkAdapters.map((element: Element) => (
            <li key={element.toString()}>{element}</li>
            // <li>{element}</li>
          ))}
        </p>
        <h3>Разъемы и порты ввода-вывода</h3>
        <p>{currentItem.connection[1].connectors}</p>
      </div>
      <div>
        <h2>Дополнительная информация</h2>
        <p>Страна-производитель .... {currentItem.producingCountry}</p>
        <p>
          {currentItem.additionalFeatures.map((element: Element) => (
            <li key={element.toString()}>{element}</li>
            // <li>{element}</li>
          ))}
        </p>
        <p>Страна регистрации бренда .... {currentItem.countryRegistration}</p>
        <p>Гарантия .... {currentItem.guarantee}</p>
      </div>
    </div>
  );
}
