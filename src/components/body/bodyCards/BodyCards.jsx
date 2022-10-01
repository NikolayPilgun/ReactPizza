import { useEffect, useState } from "react";
import BodyCard from "./bodyCard/BodyCard";
import styles from "./bodyCards.module.scss";
import BodyLoading from "./bodyLoading/BodyLoading";
//import pizzas from "../../../assets/pizzas.json";

function BodyCards() {
  //https://63382770937ea77bfdbb4510.mockapi.io/items
  const [items, setItems] = useState([]);

  const loading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    fetch("https://63382770937ea77bfdbb4510.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((pizzas) => {
        setItems(pizzas);
      });
  }, []);

  return (
    <div className={styles.bodyCards}>
      {items.length < 1
        ? loading.map((load) => <BodyLoading key={load} />)
        : items.map((card) => (
            <BodyCard
              key={card.id}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              price={card.price}
              sizes={card.sizes}
              types={card.types}
            />
          ))}
    </div>
  );
}

export default BodyCards;
