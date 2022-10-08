import { BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./bodyTitle.module.scss";

function BodyTitle({ searchValue, setSearchValue }) {
	return (
		<div className={styles.bodyTitle}>
			<div className={styles.title}>
				<h2>Пицца</h2>
			</div>
			<div className={styles.search}>
				<input
					onChange={(event) => setSearchValue(event.target.value)}
					value={searchValue}
					type="text"
					placeholder="Поиск пиццы..."
				/>
				<span>
					<BsSearch />
				</span>
				{searchValue && (
					<div className={styles.close} onClick={() => setSearchValue("")}>
						<IoCloseSharp />
					</div>
				)}
			</div>
		</div>
	);
}

export default BodyTitle;
