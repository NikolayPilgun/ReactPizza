import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeSubnav: 0,
};

export const subnavSlice = createSlice({
	name: "subnav",
	initialState,
	reducers: {
		setActiveSubnav: (state, action) => {
			state.activeSubnav = action.payload;
		},
	},
});

export const { setActiveSubnav } = subnavSlice.actions;

export default subnavSlice.reducer;
