import {
	CounterBasketType,
	PizzasBasketType,
} from "../redux/slices/basketSlice";
import { totalCalcPrice, totalCalcQuality } from "./totalCalc";

// pizzas
export const getBasketPizzasLS = () => {
	const dataPizzas = localStorage.getItem("BasketPizzas");
	const pizzas: PizzasBasketType[] = dataPizzas ? JSON.parse(dataPizzas) : [];
	const totalPrice = totalCalcPrice(pizzas);
	const productQuality = totalCalcQuality(pizzas);

	return {
		pizzas,
		totalPrice,
		productQuality,
	};
};
// counter
export const getBasketCounterLS = () => {
	const dataCounter = localStorage.getItem("BasketCounter");
	const counter: CounterBasketType[] = dataCounter
		? JSON.parse(dataCounter)
		: [];

	return { counter };
};
