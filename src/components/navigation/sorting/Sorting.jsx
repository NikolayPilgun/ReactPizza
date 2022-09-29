import styles from "./sorting.module.scss";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

function Sorting() {
  const [sorting, setSorting] = useState(false);
  const [activeSorting, setActiveSorting] = useState(0);
  const list = ["популярности", "цене", "алфавиту"];

  return (
    <div className={styles.sorting} onClick={() => setSorting(!sorting)}>
      <div className={styles.title}>
        <span>{sorting ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
        <span>Сортировка по:</span>
      </div>
      <div className={styles.sort}>
        <span>{list[activeSorting]}</span>
      </div>
      {sorting && (
        <div className={styles.sortPopup}>
          <ul>
            {list.map((name, index) => (
              <li
                key={index}
                onClick={() => setActiveSorting(index)}
                className={activeSorting === index ? styles.active : ""}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sorting;
