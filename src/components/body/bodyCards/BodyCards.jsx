import BodyCard from "./bodyCard/BodyCard";
import styles from "./bodyCards.module.scss";

function BodyCards() {
  return (
    <div className={styles.bodyCards}>
      <BodyCard />
      <BodyCard />
      <BodyCard />
      <BodyCard />
    </div>
  );
}

export default BodyCards;
