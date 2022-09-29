import styles from "./bodyCard.module.scss";

import { GoPlus } from "react-icons/go";
import { useState } from "react";

function BodyCard({ id, imageUrl, title, price, sizes, types }) {
  const [quantity, setQuantity] = useState(0);
  const [activeCardSizes, setActiveCardSizes] = useState(0);
  const [activeCardType, setActiveCardType] = useState(0);
  const typeNames = ["традиционное", "тонкое"];

  return (
    <div className={styles.bodyCard}>
      <div className={styles.container}>
        <div className={styles.bodyImg}>
          <img src={imageUrl} alt={`Пицца  ${title} id#${id}`} />
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.choice}>
          <ul className={styles.dough}>
            {types.map((type, index) => (
              <li
                key={index}
                onClick={() => setActiveCardType(index)}
                className={activeCardType === index ? styles.active : ""}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul className={styles.size}>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveCardSizes(index)}
                className={activeCardSizes === index ? styles.active : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.order}>
          <div className={styles.price}>от {price} ₽</div>
          <div className={styles.button}>
            <button
              className={`${styles.buttonCus} ${styles.btn}`}
              onClick={() => setQuantity(quantity + 1)}
            >
              <span className={styles.text}>
                <span className={styles.plus}>
                  <GoPlus />
                </span>
                Добавить
                <span className={styles.number}>
                  {quantity > 0 && quantity}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyCard;
