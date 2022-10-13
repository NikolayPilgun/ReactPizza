import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../../../redux/slices/categorySlice";
import { setActiveSubnav } from "../../../../redux/slices/subnavSlice";
import styles from "./categories.module.scss";

function Categories() {
	const categorIndex = useSelector((state) => state.categorys.categorIndex);
	const dispatch = useDispatch();
	const categories = [
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
}

export default Categories;
