import { useState } from "react";
import styles from "./categories.module.scss";

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Вкусные",
  ];

  const onClickCategory = (i) => {
    setActiveCategory(i);
  };
  return (
    <div className={styles.container}>
      <ul className={styles.categories}>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeCategory === index ? styles.active : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
