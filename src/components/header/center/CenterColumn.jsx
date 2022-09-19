import styles from "./centerColumn.module.scss";
import { AiFillClockCircle } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";

function CenterColumn() {
  return (
    <div className={styles.centerColumn}>
      <a className="phone" href="tel:8 (800) 111-22-33">
        <span>
          <HiPhone />
        </span>
        <span>8 (800) 111-22-33</span>
      </a>
      <div className={styles.text}>
        <h2>Среднее время доставки:</h2>
        <p>
          <span>
            <AiFillClockCircle />
          </span>
          <span>45 минут</span>
        </p>
      </div>
    </div>
  );
}

export default CenterColumn;
