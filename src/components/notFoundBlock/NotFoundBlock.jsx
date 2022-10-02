import { AiFillBug } from "react-icons/ai";
import styles from "./notFound.module.scss";

function NotFoundBlock() {
	return (
		<div className={styles.notFound}>
			<div className={styles.picture}>
				<AiFillBug />
			</div>
			<div className={styles.title}>
				<h2>Ничего не найдено.</h2>
			</div>
			<div className={styles.subTitle}>
				<h3>
					К сожалению данная страница отсутствует в нашем интернет-магазине.
				</h3>
			</div>
		</div>
	);
}

export default NotFoundBlock;
