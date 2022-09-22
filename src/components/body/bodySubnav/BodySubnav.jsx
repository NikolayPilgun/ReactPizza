import styles from "./bodySubnav.module.scss";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function BodySubnav() {
  return (
    <div className={styles.bodyTitle}>
      <ul className={styles.container}>
        <li>
          <a className={styles.back} href="#1">
            <AiFillCaretLeft />
          </a>
        </li>
        <li>
          <a href="#1">1</a>
        </li>
        <li className={styles.active}>
          <a href="#1">2</a>
        </li>
        <li>
          <a href="#1">3</a>
        </li>
        <li>
          <a className={styles.forward} href="#1">
            <AiFillCaretRight />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BodySubnav;
