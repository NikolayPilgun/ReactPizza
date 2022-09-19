import styles from "./banner.module.scss";
import bannerPizza from "./banner.jpeg";

function Banner() {
  return (
    <div className={styles.banner}>
      <img src={bannerPizza} alt="pizza banner" />
    </div>
  );
}

export default Banner;
