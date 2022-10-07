import Categories from "./categories/Categories";
import styles from "./nav.module.scss";
import Sorting from "./sorting/Sorting";

function Navigation({
	activeCategory,
	setActiveCategory,
	activeSorting,
	setActiveSorting,
}) {
	return (
		<nav className={styles.navigation}>
			<Categories
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>
			<Sorting
				activeSorting={activeSorting}
				setActiveSorting={setActiveSorting}
			/>
		</nav>
	);
}

export default Navigation;
