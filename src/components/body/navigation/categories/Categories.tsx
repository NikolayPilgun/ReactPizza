import React from "react";
import { useSelector } from "react-redux";
import {
	selectCategory,
	setActiveCategory,
} from "../../../../redux/slices/categorySlice";
import { setActiveSubnav } from "../../../../redux/slices/pageSlice";
import { useAppDispatch } from "../../../../redux/store";
import styles from "./categories.module.scss";

const Categories: React.FC = () => {
	const categorIndex = useSelector(selectCategory);
	const dispatch = useAppDispatch();
	const categories: string[] = [
		"Все",
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Вкусные",
	];

	return (
		<div className={styles.container}>
			<ul className={styles.categories}>
				{categories.map((value, index) => (
					<li
						key={index}
						onClick={() => {
							dispatch(setActiveCategory(index));
							dispatch(setActiveSubnav(0));
						}}
						className={categorIndex === index ? styles.active : ""}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
