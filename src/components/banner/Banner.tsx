import React from "react";
import bannerPizza from "./banner.jpeg";
import styles from "./banner.module.scss";

const Banner: React.FC = () => {
	return (
		<div className={styles.banner}>
			<img src={bannerPizza} alt="pizza banner" />
		</div>
	);
};

export default Banner;
