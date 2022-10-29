import React, { useContext, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { NavContext } from "../../Body";
import styles from "./sorting.module.scss";

type SortingContextType = {
	activeSorting: {
		name: string;
		sort: string;
	};
	setActiveSorting: (obj: { name: string; sort: string }) => void;
};

const Sorting: React.FC = () => {
	const { activeSorting, setActiveSorting } =
		useContext<SortingContextType>(NavContext);

	const [sorting, setSorting] = useState<boolean>(false);

	type ListType = {
		name: string;
		sort: string;
	};
	const list: ListType[] = [
		{ name: "популярности(DESC)", sort: "rating" },
		{ name: "популярности(ASC)", sort: "-rating" },
		{ name: "цене(DESC)", sort: "price" },
		{ name: "цене(ASC)", sort: "-price" },
		{ name: "алфавиту(DESC)", sort: "title" },
		{ name: "алфавиту(ASC)", sort: "-title" },
	];

	return (
		<div className={styles.sorting} onClick={() => setSorting(!sorting)}>
			<div className={styles.title}>
				<span>{sorting ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
				<span>Сортировка по:</span>
			</div>
			<div className={styles.sort}>
				<span>{activeSorting.name}</span>
			</div>
			{sorting && (
				<div className={styles.sortPopup}>
					<ul>
						{list.map((obj, index) => (
							<li
								key={index}
								onClick={() => setActiveSorting(obj)}
								className={activeSorting.sort === obj.sort ? styles.active : ""}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sorting;