import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzasMain = createAsyncThunk(
	"pizzas/fetchPizzasMainRes",
	async ({ activeSubnav, categorIndex, activeSorting, searchValue }) => {
		const pizzaList = await axios.get(
			`https://63382770937ea77bfdbb4510.mockapi.io/items?page=${
				activeSubnav + 1
			}&limit=10&${
				categorIndex > 0 ? `category=${categorIndex}` : ""
			}&sortBy=${activeSorting.sort.replace("-", "")}&order=${
				activeSorting.sort.includes("-") ? "asc" : "desc"
			}${searchValue ? `&search=${searchValue}` : ""}`
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
