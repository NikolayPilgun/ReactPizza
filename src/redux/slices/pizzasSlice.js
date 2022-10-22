import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchPagesMain } from "./pageSlice";

export const fetchPizzasMain = createAsyncThunk(
	"pizzas/fetchPizzasMainRes",
	async (params, thunkAPI) => {
		const { currentPage, categorIndex, sortingIndex, searchValue } = params;
		const pizzaList = await axios.get(
			`https://63382770937ea77bfdbb4510.mockapi.io/items?page=${
				currentPage + 1
			}&limit=10&${
				categorIndex > 0 ? `category=${categorIndex}` : ""
			}&sortBy=${sortingIndex.sort.replace("-", "")}&order=${
				sortingIndex.sort.includes("-") ? "asc" : "desc"
			}${searchValue ? `&search=${searchValue}` : ""}`
		);
		thunkAPI.dispatch(
			fetchPagesMain({
				categorIndex: categorIndex,
				searchValue: searchValue,
			})
		);
		return pizzaList.data;
	}
);

const initialState = {
	pizzasMain: [],
	statusLoading: "loading", // loading | success| error
};

export const pizzasSlice = createSlice({
	name: "pizzas",
	initialState,
	reducers: {
		setPizzasMain: (state, action) => {
			state.pizzasMain = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzasMain.pending, (state) => {
				state.statusLoading = "loading";
			})
			.addCase(fetchPizzasMain.fulfilled, (state, action) => {
				state.pizzasMain = action.payload;
				state.statusLoading = "success";
			})
			.addCase(fetchPizzasMain.rejected, (state) => {
				state.statusLoading = "error";
				state.pizzasMain = [];
			});
	},
});
export const selectPizzas = (state) => state.pizzas;
export const { setPizzasMain } = pizzasSlice.actions;

export default pizzasSlice.reducer;

// {
//   [fetchPizzasMain.fulfilled]: (state, action) => {
//     state.pizzasMain = action.payload;
//   },
//   [fetchPizzasMain.pending]: (state, action) => {
//     console.log("Loading");
//   },
// },
