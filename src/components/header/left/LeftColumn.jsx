import styles from "./leftColumn.module.scss";
import logoPizza from "./logoPizza.png";

function LeftColumn() {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.logo}>
        <img src={logoPizza} alt="логотип пицца" />
      </div>
      <div className={styles.title}>
        <h1>Pizza PaPa JohnS</h1>
        <h3>у нас лучшая пицца в вашем городе</h3>
      </div>
    </div>
  );
}

export default LeftColumn;
