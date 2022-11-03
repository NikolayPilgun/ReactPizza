import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBasketCounterLS, getBasketPizzasLS } from "../../utils/getBasketLS";
import { totalCalcPrice, totalCalcQuality } from "../../utils/totalCalc";
import { RootState } from "../store";

export type PizzasBasketType = {
	positionNumber: string;
	id: number;
	imageUrl: string;
	title: string;
	price: number;
	sizes: number;
	types: string;
	quality: number;
};
export type CounterBasketType = {
	id: number;
	quality: number;
};

type BasketStateType = {
	productQuality: number;
	totalPrice: number;
	counter: CounterBasketType[];
	pizzas: PizzasBasketType[];
};
const { pizzas, productQuality, totalPrice } = getBasketPizzasLS();
const { counter } = getBasketCounterLS();

const initialState: BasketStateType = {
	pizzas,
	counter,
	productQuality,
	totalPrice,
};

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		// pizzas
		addItemBasket: (state, action: PayloadAction<PizzasBasketType>) => {
			const findPizzas = state.pizzas.find(
				(obj) => obj.positionNumber === action.payload.positionNumber
			);
			if (findPizzas) {
				findPizzas.quality++;
			} else {
				state.pizzas.push(action.payload);
			}
		},
		removeItemBasket: (state, action: PayloadAction<string>) => {
			state.pizzas = state.pizzas.filter(
				(obj) => obj.positionNumber !== action.payload
			);
		},
		totalSum: (state) => {
			state.totalPrice = totalCalcPrice(state.pizzas);
			state.productQuality = totalCalcQuality(state.pizzas);
		},
		clearItemBasket: (state) => {
			state.pizzas = [];
			state.counter = [];
			state.productQuality = 0;
			state.totalPrice = 0;
		},

		incrementQuantity: (state, action: PayloadAction<string>) => {
			const findPizzasQuantity = state.pizzas.find(
				(obj) => obj.positionNumber === action.payload
			);
			if (findPizzasQuantity) {
				findPizzasQuantity.quality++;
			}
		},
		decrementQuantity: (state, action: PayloadAction<string>) => {
			const findQuantity = state.pizzas.find(
				(obj) => obj.positionNumber === action.payload
			);
			if (findQuantity) {
				findQuantity.quality--;
			}
		},

		// counter
		addQuantityMain: (state, action: PayloadAction<CounterBasketType>) => {
			const findCounter = state.counter.find(
				(obj) => obj.id === action.payload.id
			);
			if (findCounter) {
				findCounter.quality++;
			} else {
				state.counter.push(action.payload);
			}
		},
		incrementQuantityMain: (state, action: PayloadAction<number>) => {
			const findQuantityMain = state.counter.find(
				(obj) => obj.id === action.payload
			);
			if (findQuantityMain) {
				findQuantityMain.quality++;
			}
		},
		decrementQuantityMain: (state, action: PayloadAction<number>) => {
			const findQuantityMain = state.counter.find(
				(obj) => obj.id === action.payload
			);
			if (findQuantityMain) {
				findQuantityMain.quality--;
			}
		},
		removeQuantityMain: (state, action: PayloadAction<CounterBasketType>) => {
			const findRemoveMain = state.counter.find(
				(obj) => obj.id === action.payload.id
			);
			if (findRemoveMain) {
				findRemoveMain.quality -= action.payload.quality;
			}
		},
	},
});

export const selectBasketById = (id: number) => (state: RootState) =>
	state.basket.counter.find((obj) => obj.id === id);

export const selectBasket = (state: RootState) => state.basket;

export const {
	addItemBasket,
	removeItemBasket,
	totalSum,
	clearItemBasket,
	incrementQuantity,
	decrementQuantity,
	addQuantityMain,
	incrementQuantityMain,
	decrementQuantityMain,
	removeQuantityMain,
} = basketSlice.actions;

export default basketSlice.reducer;
