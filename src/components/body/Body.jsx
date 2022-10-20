import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzasMain } from "../../redux/slices/pizzasSlice";
import styles from "./body.module.scss";
import BodyCards from "./bodyCards/BodyCards";
import BodySubnav from "./bodySubnav/BodySubnav";
import BodyTitle from "./bodyTitle/BodyTitle";
import Navigation from "./navigation/Navigation";

export const NavContext = React.createContext();

function Body() {
	const [searchValue, setSearchValue] = useState("");
	const [activeSorting, setActiveSorting] = useState({
		name: "популярности",
		sort: "rating",
	});
	const categorIndex = useSelector((state) => state.categorys.categorIndex);
	const activeSubnav = useSelector((state) => state.subnav.activeSubnav);
	const { statusLoading } = useSelector((state) => state.pizzas);
	const dispatch = useDispatch();

	const [numberPages, setNumberPages] = useState(1); // --------

	useEffect(() => {
		async function fetchData() {
			try {
				const numberOfPages = await axios.get(
					`https://63382770937ea77bfdbb4510.mockapi.io/items?${
						categorIndex > 0 ? `category=${categorIndex}` : ""
					}${searchValue ? `&search=${searchValue}` : ""}`
				);
				let pages = Math.ceil(numberOfPages.data.length / 10);
				setNumberPages(pages);
			} catch (error) {
				console.log("ERROR NumberPages", error);
			}

			dispatch(
				fetchPizzasMain({
					activeSubnav: activeSubnav,
					categorIndex: categorIndex,
					activeSorting: activeSorting,
					searchValue: searchValue,
				})
			);
		}

		fetchData();
	}, [categorIndex, activeSorting, searchValue, activeSubnav, dispatch]);

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
			<BodyCards />
			{statusLoading === "error" ? (
				<></>
			) : (
				<BodySubnav numberPages={numberPages} />
			)}
		</div>
	);
}

export default Body;
