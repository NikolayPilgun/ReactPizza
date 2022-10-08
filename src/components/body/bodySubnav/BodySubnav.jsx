import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from "./bodySubnav.module.scss";

function BodySubnav({ activeSubnav, setActiveSubnav }) {
	const subnavArr = [...Array(3).keys()];

	return (
		<div className={styles.bodyTitle}>
			<button
				disabled={activeSubnav === 0 ? true : false}
				onClick={() => setActiveSubnav(activeSubnav - 1)}
			>
				<AiFillCaretLeft />
			</button>
			<ul className={styles.container}>
				{subnavArr.map((value, index) => (
					<li
						key={index}
						onClick={() => setActiveSubnav(index)}
						className={activeSubnav === index ? styles.active : ""}
					>
						<span>{value + 1}</span>
					</li>
				))}
			</ul>
			<button
				disabled={activeSubnav === subnavArr.length - 1 ? true : false}
				onClick={() => setActiveSubnav(activeSubnav + 1)}
			>
				<AiFillCaretRight />
			</button>
		</div>
	);
}

export default BodySubnav;
