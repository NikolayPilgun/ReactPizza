import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categorIndex: 0,
};

export const categorySlice = createSlice({
	name: "categorys",
	initialState,
	reducers: {
		setActiveCategory: (state, action) => {
			state.categorIndex = action.payload;
		},
	},
});
export const selectCategory = (state) => state.categorys.categorIndex;

export const { setActiveCategory } = categorySlice.actions;

export default categorySlice.reducer;
