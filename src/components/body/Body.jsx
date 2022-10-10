import React, { useEffect, useState } from "react";
import styles from "./body.module.scss";
import BodyCards from "./bodyCards/BodyCards";
import BodySubnav from "./bodySubnav/BodySubnav";
import BodyTitle from "./bodyTitle/BodyTitle";
import Navigation from "./navigation/Navigation";

export const NavContext = React.createContext();

function Body() {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState("");
	const [activeSubnav, setActiveSubnav] = useState(0);
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeSorting, setActiveSorting] = useState({
		name: "популярности",
		sort: "rating",
	});

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
		<div className={styles.body}>
			<NavContext.Provider
				value={{
					activeCategory,
					setActiveCategory,
					activeSorting,
					setActiveSorting,
				}}
			>
				<Navigation />
			</NavContext.Provider>
			<BodyTitle searchValue={searchValue} setSearchValue={setSearchValue} />
			<BodyCards items={items} isLoading={isLoading} />
			<BodySubnav
				activeSubnav={activeSubnav}
				setActiveSubnav={setActiveSubnav}
			/>
		</div>
	);
}

export default Body;
