import styles from "./categories.module.scss";

function Categories() {
  return (
    <div className={styles.container}>
      <ul className={styles.categories}>
        <li className={styles.active}>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Вкусные</li>
      </ul>
    </div>
  );
}

export default Categories;
