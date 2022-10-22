import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import categoryReducer from "./slices/categorySlice";
import pagesReducer from "./slices/pageSlice";
import pizzasReducer from "./slices/pizzasSlice";

export const store = configureStore({
	reducer: {
		categorys: categoryReducer,
		basket: basketReducer,
		pizzas: pizzasReducer,
		pages: pagesReducer,
	},
});
