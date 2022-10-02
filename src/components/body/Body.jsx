import styles from "./body.module.scss";
import BodyCards from "./bodyCards/BodyCards";
import BodySubnav from "./bodySubnav/BodySubnav";
import BodyTitle from "./bodyTitle/BodyTitle";
import Navigation from "./navigation/Navigation";

function Body() {
	return (
		<div className={styles.body}>
			<Navigation />
			<BodyTitle />
			<BodyCards />
			<BodySubnav />
		</div>
	);
}

export default Body;
