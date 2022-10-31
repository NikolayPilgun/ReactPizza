import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../../redux/slices/categorySlice";
import { selectPage } from "../../redux/slices/pageSlice";
import {
	fetchPizzasMain,
	selectPizzas,
	SortingObjType,
} from "../../redux/slices/pizzasSlice";
import { useAppDispatch } from "../../redux/store";
import styles from "./body.module.scss";
import BodyCards from "./bodyCards/BodyCards";
import BodySubnav from "./bodySubnav/BodySubnav";
import BodyTitle from "./bodyTitle/BodyTitle";
import Navigation from "./navigation/Navigation";

export type BodyContextType = {
	activeSorting: SortingObjType;
	setActiveSorting: (val: SortingObjType) => void;
	sorting: boolean;
	setSorting: (val: boolean) => void;
};

export const NavContext = React.createContext<BodyContextType>(
	{} as BodyContextType
);

const Body: React.FC = () => {
	const [sorting, setSorting] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>("");
	const [activeSorting, setActiveSorting] = useState<SortingObjType>({
		name: "популярности",
		sort: "rating",
	});
	const categorIndex = useSelector(selectCategory);
	const { activeSubnav } = useSelector(selectPage);
	const { statusLoading } = useSelector(selectPizzas);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			fetchPizzasMain({
				currentPage: activeSubnav,
				categorIndex: categorIndex,
				sortingIndex: activeSorting,
				searchValue: searchValue,
			})
		);
	}, [categorIndex, activeSorting, searchValue, activeSubnav, dispatch]);

	const onClickSorting = () => {
		if (sorting) {
			setSorting(false);
		}
	};

	return (
		<div onClick={onClickSorting} className={styles.body}>
			<NavContext.Provider
				value={{
					activeSorting,
					setActiveSorting,
					sorting,
					setSorting,
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
