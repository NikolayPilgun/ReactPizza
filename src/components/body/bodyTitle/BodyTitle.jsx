import styles from "./bodyTitle.module.scss";
import { BsSearch } from "react-icons/bs";

function BodyTitle() {
  return (
    <div className={styles.bodyTitle}>
      <div className={styles.title}>
        <h2>Пицца</h2>
      </div>
      <div className={styles.search}>
        <form>
          <input type="text" placeholder="Поиск пиццы..." />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default BodyTitle;
