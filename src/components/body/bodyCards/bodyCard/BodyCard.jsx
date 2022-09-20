import styles from "./bodyCard.module.scss";
import Pizza from "./bodyImg/pizza7.png";
import { GoPlus } from "react-icons/go";

function BodyCard() {
  return (
    <div className={styles.bodyCard}>
      <div className={styles.container}>
        <div className={styles.bodyImg}>
          <img src={Pizza} alt="пицца №1" />
        </div>
        <div className={styles.title}>
          <h2>Мясной Микс</h2>
        </div>
        <div className={styles.choice}>
          <p className={styles.dough}>
            <span className={styles.active}>тонкое</span>
            <span>традиционное</span>
          </p>
          <p className={styles.size}>
            <span>26 см.</span>
            <span>30 см.</span>
            <span className={styles.active}>40 см.</span>
          </p>
        </div>
        <div className={styles.order}>
          <div className={styles.price}>от 450 ₽</div>
          <div className={styles.button}>
            <button className={`${styles.buttonCus} ${styles.btn}`}>
              <span className={styles.text}>
                <span className={styles.plus}>
                  <GoPlus />
                </span>
                Добавить
                <span className={styles.number}>0</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyCard;
