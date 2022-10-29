import React from "react";
import styles from "./bodyLoading.module.scss";

const BodyLoading: React.FC = () => {
	return (
		<div className={styles.bodyLoading}>
			<div className={styles.circle}></div>
			<div className={`${styles.title} ${styles.general}`}></div>
			<div className={`${styles.choice} ${styles.general}`}></div>
			<div className={styles.button}>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};

export default BodyLoading;
