import debounce from "lodash.debounce";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./bodyTitle.module.scss";

type BodyTitleProps = { setSearchValue: (val: string) => void };

const BodyTitle: React.FC<BodyTitleProps> = ({ setSearchValue }) => {
	const [search, setSearch] = useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);

	const debouncedSearch = useMemo(
		() =>
			debounce((val: string) => {
				setSearchValue(val);
			}, 750),
		[setSearchValue]
	);

	const onChangeSearch = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSearch(event.target.value);
			debouncedSearch(event.target.value);
		},
		[debouncedSearch]
	);

	const onClickSearch = () => {
		setSearchValue("");
		setSearch("");
		// if (inputRef.current) {
		// 	inputRef.current.focus();
		// }
		inputRef.current?.focus();
	};

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
					<div className={styles.close} onClick={onClickSearch}>
						<IoCloseSharp />
					</div>
				)}
			</div>
		</div>
	);
};

export default BodyTitle;
