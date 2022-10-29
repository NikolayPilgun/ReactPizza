import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/slices/categorySlice";
import { selectPage } from "../../redux/slices/pageSlice";
import { fetchPizzasMain, selectPizzas } from "../../redux/slices/pizzasSlice";
import styles from "./body.module.scss";
import BodyCards from "./bodyCards/BodyCards";
import BodySubnav from "./bodySubnav/BodySubnav";
import BodyTitle from "./bodyTitle/BodyTitle";
import Navigation from "./navigation/Navigation";

type activeSortingType = { name: string; sort: string };
// нужно разобраться и доделать
type BodyContextType = {
	activeSorting: activeSortingType;
	setActiveSorting: (val: activeSortingType) => void;
};

export const NavContext = React.createContext<BodyContextType>(
	{} as BodyContextType
);
// нужно разобраться и доделать
const Body: React.FC = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [activeSorting, setActiveSorting] = useState<activeSortingType>({
		name: "популярности",
		sort: "rating",
	});
	const categorIndex = useSelector(selectCategory);
	const { activeSubnav } = useSelector(selectPage);
	const { statusLoading } = useSelector(selectPizzas);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			// @ts-ignore
			fetchPizzasMain({
				currentPage: activeSubnav,
				categorIndex: categorIndex,
				sortingIndex: activeSorting,
				searchValue: searchValue,
			})
		);
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
			{statusLoading === "error" ? <></> : <BodySubnav />}
		</div>
	);
};

export default Body;
