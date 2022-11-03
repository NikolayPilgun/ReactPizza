import { PizzasBasketType } from "../redux/slices/basketSlice";
type totalCalc = (pizzas: PizzasBasketType[]) => number;

export const totalCalcPrice: totalCalc = (pizzas: PizzasBasketType[]) => {
	return pizzas.reduce((sum: number, obj: PizzasBasketType) => {
		return obj.price * obj.quality + sum;
	}, 0);
};

export const totalCalcQuality: totalCalc = (pizzas: PizzasBasketType[]) => {
	return pizzas.reduce((sum: number, obj: PizzasBasketType) => {
		return obj.quality + sum;
	}, 0);
};
