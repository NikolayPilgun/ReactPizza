import { BsBasket3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./blank.module.scss";

function Blank() {
	return (
		<div className={styles.blank}>
			<div className={styles.picture}>
				<BsBasket3 />
			</div>
			<div className={styles.title}>
				<h2>Kорзина пустая.</h2>
			</div>
			<div className={styles.subTitle}>
				<h3>Вероятнее всего, вы не заказали ещё пиццу.</h3>
				<h3>Для того чтобы заказать пиццу, перейдите на главную страницу.</h3>
			</div>
			<div className={styles.button}>
				<Link to="/">
					<button className={styles.btn}>Вернутся назад</button>
				</Link>
			</div>
		</div>
	);
}

export default Blank;
