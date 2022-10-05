import { BsCart4, BsFillArrowLeftCircleFill, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import pizzas from "../../assets/pizzas.json";
import styles from "./basket.module.scss";
import Blank from "./blank/Blank";
import Shopping from "./shopping/Shopping";
function Basket() {
	const arr = [1, 2, 3];
	const colich = 3;
	const sunna = 3848;
	return (
		<div className={styles.basket}>
			{arr.length > 1 ? (
				<div className={styles.container}>
					<div className={styles.title}>
						<div className={styles.title}>
							<span>
								<BsCart4 />
							</span>
							<h2>Корзина</h2>
						</div>
						<div className={styles.title}>
							<span className={styles.cleaning}>
								<BsTrash />
							</span>
							<h2>Очистить корзину</h2>
						</div>
					</div>
					{pizzas.map((card) => (
						<Shopping
							key={card.id}
							id={card.id}
							imageUrl={card.imageUrl}
							title={card.title}
							price={card.price}
							sizes={card.sizes}
							types={card.types}
						/>
					))}

					<div className={styles.total}>
						<div className={styles.total}>
							<h2>Количество:</h2>
							<span>{colich} шт.</span>
						</div>
						<div className={styles.total}>
							<h2>Сумма заказа:</h2>
							<span>{sunna} ₽</span>
						</div>
					</div>
					<div className={styles.button}>
						<div className={styles.button}>
							<Link to="/">
								<button className={styles.buttonLeft}>
									<span>
										<BsFillArrowLeftCircleFill />
									</span>
									Вернуться назад
								</button>
							</Link>
						</div>
						<div className={styles.button}>
							<button className={styles.buttonRight}>Оплатить сейчас</button>
						</div>
					</div>
				</div>
			) : (
				<Blank />
			)}
		</div>
	);
}

export default Basket;
