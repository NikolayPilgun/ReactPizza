import { useState } from "react";
import styles from "./body.module.scss";
import BodyCards from "./bodyCards/BodyCards";
import BodySubnav from "./bodySubnav/BodySubnav";
import BodyTitle from "./bodyTitle/BodyTitle";
import Navigation from "./navigation/Navigation";

function Body() {
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeSorting, setActiveSorting] = useState({
		name: "популярности",
		sort: "rating",
	});
	return (
		<div className={styles.body}>
			<Navigation
				activeCategory={activeCategory}
				setActiveCategory={(index) => setActiveCategory(index)}
				activeSorting={activeSorting}
				setActiveSorting={(index) => setActiveSorting(index)}
			/>
			<BodyTitle />
			<BodyCards
				activeCategory={activeCategory}
				activeSorting={activeSorting}
			/>
			<BodySubnav />
		</div>
	);
}

export default Body;
