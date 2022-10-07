import { useEffect, useState } from "react";
import BodyCard from "./bodyCard/BodyCard";
import styles from "./bodyCards.module.scss";
import BodyLoading from "./bodyLoading/BodyLoading";
//import pizzas from "../../../assets/pizzas.json";

function BodyCards({ activeCategory, activeSorting }) {
	//https://63382770937ea77bfdbb4510.mockapi.io/items
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const loading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	useEffect(() => {
		setIsLoading(true);

		fetch(
			`https://63382770937ea77bfdbb4510.mockapi.io/items?${
				activeCategory > 0 ? `category=${activeCategory}` : ""
			}&sortBy=${activeSorting.sort.replace("-", "")}&order=${
				activeSorting.sort.includes("-") ? "asc" : "desc"
			}`
		)
			.then((res) => {
				return res.json();
			})
			.then((pizzas) => {
				setItems(pizzas);
				setIsLoading(false);
			});
	}, [activeCategory, activeSorting]);

	return (
		<div className={styles.bodyCards}>
			{isLoading
				? loading.map((load) => <BodyLoading key={load} />)
				: items.map((card) => (
						<BodyCard
							key={card.id}
							id={card.id}
							imageUrl={card.imageUrl}
							title={card.title}
							price={card.price}
							sizes={card.sizes}
							types={card.types}
						/>
				  ))}
		</div>
	);
}

export default BodyCards;
