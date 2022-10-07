import styles from "./categories.module.scss";

function Categories({ activeCategory, setActiveCategory }) {
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
						onClick={() => setActiveCategory(index)}
						className={activeCategory === index ? styles.active : ""}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
