import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CategoryStateType = {
	categorIndex: number;
};

const initialState: CategoryStateType = {
	categorIndex: 0,
};

export const categorySlice = createSlice({
	name: "categorys",
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<number>) => {
			state.categorIndex = action.payload;
		},
	},
});
export const selectCategory = (state: RootState) =>
	state.categorys.categorIndex;

export const { setActiveCategory } = categorySlice.actions;

export default categorySlice.reducer;
