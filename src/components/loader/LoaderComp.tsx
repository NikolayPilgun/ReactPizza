import styles from "./loader.module.scss";

function LoaderComp() {
	return (
		<div className={styles.wraper}>
			<div className={styles.loader}></div>
		</div>
	);
}

export default LoaderComp;
