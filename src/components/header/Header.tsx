import React from "react";
import CenterColumn from "./center/CenterColumn";
import styles from "./header.module.scss";
import LeftColumn from "./left/LeftColumn";
import RightColumn from "./right/RightColumn";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<LeftColumn />
			<CenterColumn />
			<RightColumn />
		</header>
	);
};

export default Header;
