import React from "react";
import Categories from "./categories/Categories";
import styles from "./nav.module.scss";
import Sorting from "./sorting/Sorting";

const Navigation: React.FC = () => {
	return (
		<nav className={styles.navigation}>
			<Categories />
			<Sorting />
		</nav>
	);
};

export default Navigation;
