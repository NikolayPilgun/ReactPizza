import React from "react";
import { HiPhone } from "react-icons/hi";
import {
	TiSocialFacebookCircular,
	TiSocialTwitter,
	TiSocialYoutube,
} from "react-icons/ti";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.left}>
				<div className={styles.phone}>
					<span>
						<HiPhone />
					</span>
					<a className="phone" href="tel:8 (800) 111-22-33">
						8 (800) 111-22-33
					</a>
				</div>
				<div className={styles.social}>
					<span>
						<a href="https://www.youtube.com/">
							<TiSocialYoutube />
						</a>
					</span>
					<span>
						<a href="https://www.twitch.tv/?lang=ru">
							<TiSocialTwitter />
						</a>
					</span>
					<span>
						<a href="https://ru-ru.facebook.com">
							<TiSocialFacebookCircular />
						</a>
					</span>
				</div>
			</div>
			<div className={styles.right}>
				<span>&#xa9;</span> <span>Ваш текст копирайта </span>
			</div>
		</div>
	);
};

export default Footer;
