import { useEffect, useState } from "react";
import BodyCard from "./bodyCard/BodyCard";
import styles from "./bodyCards.module.scss";
//import pizzas from "../../../assets/pizzas.json";

function BodyCards() {
  //https://63382770937ea77bfdbb4510.mockapi.io/items
  const [items, setItems] = useState([]);

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
      {items.map((card) => (
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
