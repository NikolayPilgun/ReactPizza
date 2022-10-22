import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPagesMain = createAsyncThunk(
	"numberOfPages/fetchPagesMainRes",
	async ({ categorIndex, searchValue }) => {
		const numberList = await axios.get(
			`https://63382770937ea77bfdbb4510.mockapi.io/items?${
				categorIndex > 0 ? `category=${categorIndex}` : ""
			}${searchValue ? `&search=${searchValue}` : ""}`
		);

		return numberList.data;
	}
);

const initialState = {
	numberOfPages: 1,
	activeSubnav: 0,
	statusLoading: "loading",
};

export const pageSlice = createSlice({
	name: "pages",
	initialState,
	reducers: {
		setActiveSubnav: (state, action) => {
			state.activeSubnav = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPagesMain.pending, (state) => {
				state.statusLoading = "loading";
			})
			.addCase(fetchPagesMain.fulfilled, (state, action) => {
				state.numberOfPages = action.payload;
				state.numberOfPages = Math.ceil(state.numberOfPages.length / 10);
				state.statusLoading = "success";
			})
			.addCase(fetchPagesMain.rejected, (state) => {
				state.statusLoading = "error";
				state.numberOfPages = 0;
			});
	},
});
export const selectPage = (state) => state.pages;
export const { setActiveSubnav } = pageSlice.actions;

export default pageSlice.reducer;
