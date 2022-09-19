import styles from "./sorting.module.scss";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

function Sorting() {
  const [arrow, setArrow] = useState(true);
  return (
    <div className={styles.sorting}>
      <div className={styles.title} onClick={() => setArrow(!arrow)}>
        <span>{arrow ? <AiFillCaretUp /> : <AiFillCaretDown />}</span>
        <span>Сортировка по:</span>
      </div>
      <div className={styles.sort}>
        <span>популярности</span>
      </div>
    </div>
  );
}

export default Sorting;
