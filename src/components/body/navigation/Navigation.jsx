import Categories from "./categories/Categories";
import styles from "./nav.module.scss";
import Sorting from "./sorting/Sorting";

function Navigation() {
	return (
		<nav className={styles.navigation}>
			<Categories />
			<Sorting />
		</nav>
	);
}

export default Navigation;
