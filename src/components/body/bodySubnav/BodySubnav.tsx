import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectPage, setActiveSubnav } from "../../../redux/slices/pageSlice";
import { useAppDispatch } from "../../../redux/store";
import PageError from "../../pageError/PageError";
import styles from "./bodySubnav.module.scss";

const BodySubnav: React.FC = () => {
	const { numberOfPages, activeSubnav, statusLoading } =
		useSelector(selectPage);
	const dispatch = useAppDispatch();
	const subnavArr = Array.from(Array(numberOfPages).keys());

	return (
		<div className={styles.bodySubnav}>
			{statusLoading === "error" ? (
				<PageError />
			) : (
				<>
					{subnavArr.length > 0 && (
						<button
							disabled={activeSubnav === 0 ? true : false}
							onClick={() => dispatch(setActiveSubnav(activeSubnav - 1))}
						>
							<AiFillCaretLeft />
						</button>
					)}

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
					{subnavArr.length > 0 && (
						<button
							disabled={activeSubnav === subnavArr.length - 1 ? true : false}
							onClick={() => dispatch(setActiveSubnav(activeSubnav + 1))}
						>
							<AiFillCaretRight />
						</button>
					)}
				</>
			)}
		</div>
	);
};

export default BodySubnav;
