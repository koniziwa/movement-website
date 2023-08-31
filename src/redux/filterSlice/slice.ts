import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  activeCategories: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<string>) {
      state.activeCategories.push(action.payload);
    },
    deleteCategory(state, action: PayloadAction<string>) {
      const newCategories = state.activeCategories.filter(
        (item) => item !== action.payload
      );
      state.activeCategories = newCategories;
    },
    resetCategories(state) {
      state.activeCategories = [];
    },
  },
});

export const { addCategory, deleteCategory, resetCategories } =
  filterSlice.actions;

export default filterSlice.reducer;
