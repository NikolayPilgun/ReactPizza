import styles from "./rightColumn.module.scss";

import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RightColumn() {
	const { productQuality, totalPrice } = useSelector((state) => state.basket);

	return (
		<Link to="basket">
			<div className={styles.rightColumn}>
				<div className={styles.price}>
					<h2>{totalPrice} ₽</h2>
				</div>
				<div className={styles.verticalLine}></div>
				<div className={styles.basket}>
					<span>
						<BsCart4 />
					</span>
					{productQuality > 0 && (
						<span className={styles.productQuality}>{productQuality}</span>
					)}
				</div>
			</div>
		</Link>
	);
}

export default RightColumn;
