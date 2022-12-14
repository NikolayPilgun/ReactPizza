import BodyCard from "./bodyCard/BodyCard";
import styles from "./bodyCards.module.scss";
import BodyLoading from "./bodyLoading/BodyLoading";
//import pizzas from "../../../assets/pizzas.json";
import React from "react";
import { useSelector } from "react-redux";
import {
	PizzasMainType,
	selectPizzas,
} from "../../../redux/slices/pizzasSlice";
import PageError from "../../pageError/PageError";

const BodyCards: React.FC = () => {
	const { pizzasMain, statusLoading } = useSelector(selectPizzas);
	const loading = Array.from(Array(10).keys());

	return (
		<div className={styles.bodyCards}>
			{statusLoading === "loading" ? (
				loading.map((index) => <BodyLoading key={index} />)
			) : (
				<>
					{statusLoading === "success" ? (
						pizzasMain.map((card: PizzasMainType) => (
							<BodyCard
								key={card.id}
								id={card.id}
								imageUrl={card.imageUrl}
								title={card.title}
								price={card.price}
								sizes={card.sizes}
								types={card.types}
							/>
						))
					) : (
						<PageError />
					)}
				</>
			)}
		</div>
	);
};

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
