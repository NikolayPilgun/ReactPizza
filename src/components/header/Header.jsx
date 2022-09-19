import CenterColumn from "./center/CenterColumn";
import styles from "./header.module.scss";
import LeftColumn from "./left/LeftColumn";
import RightColumn from "./right/RightColumn";

function Header() {
  return (
    <header className={styles.header}>
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </header>
  );
}

export default Header;
