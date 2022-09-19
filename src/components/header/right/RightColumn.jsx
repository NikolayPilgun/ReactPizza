import styles from "./rightColumn.module.scss";
import { BsCart4 } from "react-icons/bs";

function RightColumn() {
  return (
    <div className={styles.rightColumn}>
      <div className={styles.price}>
        <h2>542₽</h2>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.basket}>
        <BsCart4 />
      </div>
    </div>
  );
}

export default RightColumn;
