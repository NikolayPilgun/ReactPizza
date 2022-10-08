import { useEffect, useState } from "react";
import BodyCard from "./bodyCard/BodyCard";
import styles from "./bodyCards.module.scss";
import BodyLoading from "./bodyLoading/BodyLoading";
//import pizzas from "../../../assets/pizzas.json";

function BodyCards({
	items,
	setItems,
	activeCategory,
	activeSorting,
	searchValue,
	activeSubnav,
}) {
	//https://63382770937ea77bfdbb4510.mockapi.io/items
	const [isLoading, setIsLoading] = useState(true);
	const loading = [...Array(10).keys()];

	useEffect(() => {
		setIsLoading(true);

		fetch(
			`https://63382770937ea77bfdbb4510.mockapi.io/items?page=${
				activeSubnav + 1
			}&limit=10&${
				activeCategory > 0 ? `category=${activeCategory}` : ""
			}&sortBy=${activeSorting.sort.replace("-", "")}&order=${
				activeSorting.sort.includes("-") ? "asc" : "desc"
			}${searchValue ? `&search=${searchValue}` : ""}`
		)
			.then((res) => {
				return res.json();
			})
			.then((pizzas) => {
				setItems(pizzas);
				setIsLoading(false);
			});
	}, [activeCategory, activeSorting, searchValue, activeSubnav]);

	return (
		<div className={styles.bodyCards}>
			{isLoading
				? loading.map((load, index) => <BodyLoading key={index} />)
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

// .filter((card) => {
// 	if (
// 		card.title
// 			.toLocaleLowerCase()
// 			.includes(searchValue.toLocaleLowerCase())
// 	) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// })
