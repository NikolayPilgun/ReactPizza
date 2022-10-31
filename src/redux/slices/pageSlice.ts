import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

enum StatusPage {
	LOADING = "loading",
	SUCCES = "success",
	ERROR = "error",
}

type PageStateType = {
	numberOfPages: number;
	activeSubnav: number;
	statusLoading: StatusPage;
};

type FetchPagesType = {
	categorIndex: number;
	searchValue: string;
};

export const fetchPagesMain = createAsyncThunk(
	"numberOfPages/fetchPagesMainRes",
	async (params: FetchPagesType) => {
		const { categorIndex, searchValue } = params;
		const numberList = await axios.get(
			`https://63382770937ea77bfdbb4510.mockapi.io/items?${
				categorIndex > 0 ? `category=${categorIndex}` : ""
			}${searchValue ? `&search=${searchValue}` : ""}`
		);

		return numberList.data.length as number;
	}
);

const initialState: PageStateType = {
	numberOfPages: 1,
	activeSubnav: 0,
	statusLoading: StatusPage.LOADING,
};

export const pageSlice = createSlice({
	name: "pages",
	initialState,
	reducers: {
		setActiveSubnav: (state, action: PayloadAction<number>) => {
			state.activeSubnav = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPagesMain.pending, (state) => {
				state.statusLoading = StatusPage.LOADING;
			})
			.addCase(
				fetchPagesMain.fulfilled,
				(state, action: PayloadAction<number>) => {
					state.numberOfPages = Math.ceil(action.payload / 10);
					state.statusLoading = StatusPage.SUCCES;
				}
			)
			.addCase(fetchPagesMain.rejected, (state) => {
				state.statusLoading = StatusPage.ERROR;
				state.numberOfPages = 0;
			});
	},
});
export const selectPage = (state: RootState) => state.pages;
export const { setActiveSubnav } = pageSlice.actions;

export default pageSlice.reducer;
