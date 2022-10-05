import { useState } from "react";
import {
	AiFillCloseCircle,
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
} from "react-icons/ai";
import styles from "./shopping.module.scss";

function Shopping({ imageUrl, title, id, sizes, types, price }) {
	let [count, setCount] = useState(0);
	const typeNames = ["традиционное", "тонкое"];
	const knopka = [1];
	console.log(knopka);
	return (
		<div className={styles.shopping}>
			<div className={styles.card}>
				<div className={styles.picture}>
					<img src={imageUrl} alt={`Пицца  ${title} id#${id}`} />
				</div>
				<div className={styles.description}>
					<h2>{title}</h2>
					<p>
						<span>{typeNames[types[0]]},</span>
						<span>{sizes[1]}см</span>
					</p>
				</div>
				<div className={styles.amount}>
					<button
						disabled={count <= 1 ? true : false}
						onClick={() => setCount(count - 1)}
					>
						<AiOutlineMinusCircle />
					</button>
					<h3>{count}</h3>
					<button onClick={() => setCount(count + 1)}>
						<AiOutlinePlusCircle />
					</button>
				</div>
				<div className={styles.price}>{price * count} ₽</div>
				<div className={styles.remove}>
					<AiFillCloseCircle />
				</div>
			</div>
		</div>
	);
}

export default Shopping;
