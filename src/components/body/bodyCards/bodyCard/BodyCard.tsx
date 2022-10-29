import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
	addItemBasket,
	addQuantityMain,
	selectBasketById,
	totalSum,
} from "../../../../redux/slices/basketSlice";
import styles from "./bodyCard.module.scss";

type BodyCardProps = {
	id: number;
	imageUrl: string;
	title: string;
	price: number;
	sizes: number[];
	types: string[];
};

const BodyCard: React.FC<BodyCardProps> = ({
	id,
	imageUrl,
	title,
	price,
	sizes,
	types,
}) => {
	const [activeCardSizes, setActiveCardSizes] = useState(sizes[0]);
	const [activeCardType, setActiveCardType] = useState(types[0]);
	const dispatch = useDispatch();
	const positionNumber = String(id) + String(activeCardSizes) + activeCardType;
	const basketItem = useSelector(selectBasketById(id));

	const itemQuality = basketItem ? basketItem.quality : 0;

	const onClickAddItemBasket = () => {
		const itemPizza = {
			id: id,
			imageUrl: imageUrl,
			title: title,
			types: activeCardType,
			sizes: activeCardSizes,
			price: price,
			quality: 1,
			positionNumber: positionNumber,
		};
		const counterPizza = {
			id: id,
			quality: 1,
		};

		dispatch(addItemBasket(itemPizza));
		dispatch(totalSum());
		dispatch(addQuantityMain(counterPizza));
	};

	return (
		<div className={styles.bodyCard}>
			<div className={styles.container}>
				<div className={styles.bodyImg}>
					<img src={imageUrl} alt={`Пицца  ${title} id#${id}`} />
				</div>
				<div className={styles.title}>
					<h2>{title}</h2>
				</div>
				<div className={styles.choice}>
					<ul className={styles.dough}>
						{types.map((type, index) => (
							<li
								key={index}
								onClick={() => setActiveCardType(type)}
								className={activeCardType === type ? styles.active : ""}
							>
								{type}
							</li>
						))}
					</ul>
					<ul className={styles.size}>
						{sizes.map((size, index) => (
							<li
								key={index}
								onClick={() => setActiveCardSizes(size)}
								className={activeCardSizes === size ? styles.active : ""}
							>
								{size} см.
							</li>
						))}
					</ul>
				</div>
				<div className={styles.order}>
					<div className={styles.price}>от {price} ₽</div>
					<div className={styles.button}>
						<button
							className={`${styles.buttonCus} ${styles.btn}`}
							onClick={onClickAddItemBasket}
						>
							<span className={styles.text}>
								<span className={styles.plus}>
									<GoPlus />
								</span>
								Добавить
								<span className={styles.number}>
									{itemQuality > 0 && itemQuality}
								</span>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BodyCard;
