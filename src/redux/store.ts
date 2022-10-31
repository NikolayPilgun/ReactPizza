import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import basketReducer from "./slices/basketSlice";
import categoryReducer from "./slices/categorySlice";
import pagesReducer from "./slices/pageSlice";
import pizzasReducer from "./slices/pizzasSlice";

const store = configureStore({
	reducer: {
		categorys: categoryReducer,
		basket: basketReducer,
		pizzas: pizzasReducer,
		pages: pagesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
