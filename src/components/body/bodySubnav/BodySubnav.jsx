import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSubnav } from "../../../redux/slices/subnavSlice";
import styles from "./bodySubnav.module.scss";

function BodySubnav({ numberPages }) {
	const activeSubnav = useSelector((state) => state.subnav.activeSubnav);
	const dispatch = useDispatch();

	const subnavArr = [...Array(numberPages).keys()];

	return (
		<div className={styles.bodyTitle}>
			<button
				disabled={activeSubnav === 0 ? true : false}
				onClick={() => dispatch(setActiveSubnav(activeSubnav - 1))}
			>
				<AiFillCaretLeft />
			</button>
			<ul className={styles.container}>
				{subnavArr.map((value, index) => (
					<li
						key={index}
						onClick={() => dispatch(setActiveSubnav(index))}
						className={activeSubnav === index ? styles.active : ""}
					>
						<span>{value + 1}</span>
					</li>
				))}
			</ul>
			<button
				disabled={activeSubnav === subnavArr.length - 1 ? true : false}
				onClick={() => dispatch(setActiveSubnav(activeSubnav + 1))}
			>
				<AiFillCaretRight />
			</button>
		</div>
	);
}

export default BodySubnav;
