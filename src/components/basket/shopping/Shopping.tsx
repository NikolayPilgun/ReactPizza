import React from "react";
import {
	AiFillCloseCircle,
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
	decrementQuantity,
	decrementQuantityMain,
	incrementQuantity,
	incrementQuantityMain,
	PizzasBasketType,
	removeItemBasket,
	removeQuantityMain,
	totalSum,
} from "../../../redux/slices/basketSlice";
import styles from "./shopping.module.scss";

const Shopping: React.FC<PizzasBasketType> = ({
	imageUrl,
	title,
	id,
	sizes,
	types,
	price,
	quality,
	positionNumber,
}) => {
	const dispatch = useDispatch();
	const onClickPlus = () => {
		dispatch(incrementQuantity(positionNumber));
		dispatch(incrementQuantityMain(id));
		dispatch(totalSum());
	};
	const onClickMinus = () => {
		dispatch(decrementQuantity(positionNumber));
		dispatch(decrementQuantityMain(id));
		dispatch(totalSum());
	};

	const onClickRemove = () => {
		const removeMain = {
			id: id,
			quality: quality,
		};
		dispatch(removeItemBasket(positionNumber));
		dispatch(totalSum());
		dispatch(removeQuantityMain(removeMain));
	};

	return (
		<div className={styles.shopping}>
			<div className={styles.card}>
				<div className={styles.picture}>
					<img src={imageUrl} alt={`Пицца  ${title} id#${id}`} />
				</div>
				<div className={styles.description}>
					<h2>{title}</h2>
					<p>
						<span>{types},</span>
						<span>{sizes}см</span>
					</p>
				</div>
				<div className={styles.amount}>
					<button disabled={quality <= 1 ? true : false} onClick={onClickMinus}>
						<AiOutlineMinusCircle />
					</button>
					<h3>{quality}</h3>
					<button onClick={onClickPlus}>
						<AiOutlinePlusCircle />
					</button>
				</div>
				<div className={styles.price}>{price * quality} ₽</div>
				<div onClick={onClickRemove} className={styles.remove}>
					<AiFillCloseCircle />
				</div>
			</div>
		</div>
	);
};

export default Shopping;
