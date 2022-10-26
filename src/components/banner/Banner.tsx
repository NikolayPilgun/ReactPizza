import bannerPizza from "./banner.jpeg";
import styles from "./banner.module.scss";

function Banner() {
	return (
		<div className={styles.banner}>
			<img src={bannerPizza} alt="pizza banner" />
		</div>
	);
}

export default Banner;
