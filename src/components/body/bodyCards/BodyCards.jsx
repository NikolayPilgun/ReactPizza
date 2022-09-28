import BodyCard from "./bodyCard/BodyCard";
import styles from "./bodyCards.module.scss";
import pizzas from "../../../assets/pizzas.json";

function BodyCards() {
  return (
    <div className={styles.bodyCards}>
      {pizzas.map((card) => (
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
