import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pizzas: [],
	counter: [],
	productQuality: 0,
	totalPrice: 0,
};

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		// pizzas
		addItemBasket: (state, action) => {
			const findPizzas = state.pizzas.find(
				(obj) => obj.positionNumber === action.payload.positionNumber
			);
			if (findPizzas) {
				findPizzas.quality++;
			} else {
				state.pizzas.push(action.payload);
			}
		},
		removeItemBasket: (state, action) => {
			state.pizzas = state.pizzas.filter(
				(obj) => obj.positionNumber !== action.payload
			);
		},
		totalSum: (state) => {
			state.totalPrice = state.pizzas.reduce((sum, obj) => {
				return obj.price * obj.quality + sum;
			}, 0);

			state.productQuality = state.pizzas.reduce((sum, obj) => {
				return obj.quality + sum;
			}, 0);
		},
		clearItemBasket: (state) => {
			state.pizzas = [];
			state.productQuality = 0;
			state.totalPrice = 0;
		},

		incrementQuantity: (state, action) => {
			const findPizzasQuantity = state.pizzas.find(
				(obj) => obj.positionNumber === action.payload
			);

			findPizzasQuantity.quality++;
		},
		decrementQuantity: (state, action) => {
			const findQuantity = state.pizzas.find(
				(obj) => obj.positionNumber === action.payload
			);

			findQuantity.quality--;
		},

		// counter
		addQuantityMain: (state, action) => {
			const findCounter = state.counter.find(
				(obj) => obj.id === action.payload.id
			);
			if (findCounter) {
				findCounter.quality++;
			} else {
				state.counter.push(action.payload);
			}
		},
		incrementQuantityMain: (state, action) => {
			const findQuantityMain = state.counter.find(
				(obj) => obj.id === action.payload
			);

			findQuantityMain.quality++;
		},
		decrementQuantityMain: (state, action) => {
			const findQuantityMain = state.counter.find(
				(obj) => obj.id === action.payload
			);

			findQuantityMain.quality--;
		},
		removeQuantityMain: (state, action) => {
			const findRemoveMain = state.counter.find(
				(obj) => obj.id === action.payload.id
			);
			console.log(findRemoveMain.quality);
			console.log(action.payload.quality);
			findRemoveMain.quality -= action.payload.quality;
		},
	},
});

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
