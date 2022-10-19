import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import categoryReducer from "./slices/categorySlice";
import subnavReducer from "./slices/subnavSlice";

export const store = configureStore({
	reducer: {
		categorys: categoryReducer,
		subnav: subnavReducer,
		basket: basketReducer,
	},
});