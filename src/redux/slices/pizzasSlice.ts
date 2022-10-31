import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { fetchPagesMain } from "./pageSlice";

export type SortingObjType = {
	name: string;
	sort: string;
};

export type PizzasMainType = {
	id: number;
	imageUrl: string;
	title: string;
	types: string[];
	sizes: number[];
	price: number;
	category?: number;
	rating?: number;
};

enum StatusPizzas {
	LOADING = "loading",
	SUCCES = "success",
	ERROR = "error",
}

type PizzasStateType = {
	pizzasMain: PizzasMainType[];
	statusLoading: StatusPizzas;
};

type FetchPizzasType = {
	currentPage: number;
	categorIndex: number;
	sortingIndex: SortingObjType;
	searchValue: string;
};

export const fetchPizzasMain = createAsyncThunk<
	PizzasMainType[],
	FetchPizzasType
>("pizzas/fetchPizzasMainRes", async (params, thunkAPI) => {
	const { currentPage, categorIndex, sortingIndex, searchValue } = params;
	const pizzaList = await axios.get<PizzasMainType[]>(
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
});

const initialState: PizzasStateType = {
	pizzasMain: [],
	statusLoading: StatusPizzas.LOADING, // loading | success| error
};

export const pizzasSlice = createSlice({
	name: "pizzas",
	initialState,
	reducers: {
		// setPizzasMain: (state, action: PayloadAction<PizzasMainType>) => {
		// 	state.pizzasMain = action.payload;
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzasMain.pending, (state) => {
				state.statusLoading = StatusPizzas.LOADING;
			})
			.addCase(
				fetchPizzasMain.fulfilled,
				(state, action: PayloadAction<PizzasMainType[]>) => {
					state.pizzasMain = action.payload;
					state.statusLoading = StatusPizzas.SUCCES;
				}
			)
			.addCase(fetchPizzasMain.rejected, (state) => {
				state.statusLoading = StatusPizzas.ERROR;
				state.pizzasMain = [];
			});
	},
});
export const selectPizzas = (state: RootState) => state.pizzas;
// export const { setPizzasMain } = pizzasSlice.actions;

export default pizzasSlice.reducer;

// {
//   [fetchPizzasMain.fulfilled]: (state, action) => {
//     state.pizzasMain = action.payload;
//   },
//   [fetchPizzasMain.pending]: (state, action) => {
//     console.log("Loading");
//   },
// },
