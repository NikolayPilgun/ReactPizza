import debounce from "lodash.debounce";
import { useCallback, useMemo, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./bodyTitle.module.scss";

function BodyTitle({ setSearchValue }) {
	const [search, setSearch] = useState("");
	const inputRef = useRef();

	const debouncedSearch = useMemo(
		() =>
			debounce((val) => {
				setSearchValue(val);
			}, 750),
		[setSearchValue]
	);

	const onChangeSearch = useCallback(
		(e) => {
			setSearch(e.target.value);
			debouncedSearch(e.target.value);
		},
		[debouncedSearch]
	);

	return (
		<div className={styles.bodyTitle}>
			<div className={styles.title}>
				<h2>Пицца</h2>
			</div>
			<div className={styles.search}>
				<input
					ref={inputRef}
					onChange={onChangeSearch}
					value={search}
					type="text"
					placeholder="Поиск пиццы..."
				/>
				<span>
					<BsSearch />
				</span>
				{search && (
					<div
						className={styles.close}
						onClick={() => {
							setSearchValue("");
							setSearch("");
							inputRef.current.focus();
						}}
					>
						<IoCloseSharp />
					</div>
				)}
			</div>
		</div>
	);
}

export default BodyTitle;
