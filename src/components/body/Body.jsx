import { useState } from "react";
import styles from "./body.module.scss";
import BodyCards from "./bodyCards/BodyCards";
import BodySubnav from "./bodySubnav/BodySubnav";
import BodyTitle from "./bodyTitle/BodyTitle";
import Navigation from "./navigation/Navigation";

function Body() {
	const [items, setItems] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeSubnav, setActiveSubnav] = useState(0);
	const [activeSorting, setActiveSorting] = useState({
		name: "популярности",
		sort: "rating",
	});
	return (
		<div className={styles.body}>
			<Navigation
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
				activeSorting={activeSorting}
				setActiveSorting={setActiveSorting}
			/>
			<BodyTitle searchValue={searchValue} setSearchValue={setSearchValue} />
			<BodyCards
				items={items}
				setItems={setItems}
				activeCategory={activeCategory}
				activeSorting={activeSorting}
				searchValue={searchValue}
				activeSubnav={activeSubnav}
			/>
			<BodySubnav
				activeSubnav={activeSubnav}
				setActiveSubnav={setActiveSubnav}
			/>
		</div>
	);
}

export default Body;
