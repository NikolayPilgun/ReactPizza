import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectBasket } from "../../../redux/slices/basketSlice";
import styles from "./rightColumn.module.scss";

const RightColumn: React.FC = () => {
	const { productQuality, totalPrice } = useSelector(selectBasket);

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
};

export default RightColumn;
