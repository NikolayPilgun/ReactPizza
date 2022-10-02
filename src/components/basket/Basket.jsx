import styles from "./basket.module.scss";
import Blank from "./blank/Blank";

function Basket() {
	return (
		<div className={styles.basket}>
			<Blank />
		</div>
	);
}

export default Basket;
