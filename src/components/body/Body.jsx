import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
	const [numberPages, setNumberPages] = useState(1);
	const [activeSorting, setActiveSorting] = useState({
		name: "популярности",
		sort: "rating",
	});
	const categorIndex = useSelector((state) => state.categorys.categorIndex);
	const activeSubnav = useSelector((state) => state.subnav.activeSubnav);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			// await axios
			// 	.get(
			// 		`https://63382770937ea77bfdbb4510.mockapi.io/items?${
			// 			categorIndex > 0 ? `category=${categorIndex}` : ""
			// 		}${searchValue ? `&search=${searchValue}` : ""}`
			// 	)
			// 	.then((res) => {
			// 		let page = Math.ceil(res.data.length / 10);
			// 		setNumberPages(page);
			// 	});

			const numberOfPages = await axios.get(
				`https://63382770937ea77bfdbb4510.mockapi.io/items?${
					categorIndex > 0 ? `category=${categorIndex}` : ""
				}${searchValue ? `&search=${searchValue}` : ""}`
			);
			let pages = Math.ceil(numberOfPages.data.length / 10);
			setNumberPages(pages);

			// await axios
			// 	.get(
			// 		`https://63382770937ea77bfdbb4510.mockapi.io/items?page=${
			// 			activeSubnav + 1
			// 		}&limit=10&${
			// 			categorIndex > 0 ? `category=${categorIndex}` : ""
			// 		}&sortBy=${activeSorting.sort.replace("-", "")}&order=${
			// 			activeSorting.sort.includes("-") ? "asc" : "desc"
			// 		}${searchValue ? `&search=${searchValue}` : ""}`
			// 	)
			// 	.then((response) => {
			// 		setItems(response.data);
			// 		setIsLoading(false);
			// 	});

			const rpizzaList = await axios.get(
				`https://63382770937ea77bfdbb4510.mockapi.io/items?page=${
					activeSubnav + 1
				}&limit=10&${
					categorIndex > 0 ? `category=${categorIndex}` : ""
				}&sortBy=${activeSorting.sort.replace("-", "")}&order=${
					activeSorting.sort.includes("-") ? "asc" : "desc"
				}${searchValue ? `&search=${searchValue}` : ""}`
			);
			setItems(rpizzaList.data);
			setIsLoading(false);
		}

		fetchData();
	}, [categorIndex, activeSorting, searchValue, activeSubnav]);

	return (
		<div className={styles.body}>
			<NavContext.Provider
				value={{
					activeSorting,
					setActiveSorting,
				}}
			>
				<Navigation />
			</NavContext.Provider>
			<BodyTitle setSearchValue={setSearchValue} />
			<BodyCards items={items} isLoading={isLoading} />
			<BodySubnav numberPages={numberPages} />
		</div>
	);
}

export default Body;
