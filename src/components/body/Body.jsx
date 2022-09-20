import styles from "./body.module.scss";
import BodyCards from "./bodyCards/BodyCards";
import BodyTitle from "./bodyTitle/BodyTitle";
import BodySubnav from "./bodySubnav/BodySubnav";

function Body() {
  return (
    <div className={styles.body}>
      <BodyTitle />
      <BodyCards />
      <BodySubnav />
    </div>
  );
}

export default Body;
