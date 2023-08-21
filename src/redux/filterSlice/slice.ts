import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCurrentDate } from "../../utils/getCurrentDate";

import { Sort, FilterSliceState, SortPropertyEnum } from "./types";

const currentDate = getCurrentDate();

const initialState: FilterSliceState = {
  showPast: true,
  startDate: "2019-09-03",
  endDate: currentDate,
  sort: {
    title: "дате",
    sortProperty: SortPropertyEnum.DATE_DESC,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setShowPast(state, action: PayloadAction<boolean>) {
      state.showPast = action.payload;
    },
    setStartDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<string>) {
      state.endDate = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const { setShowPast, setStartDate, setEndDate, setSort } =
  filterSlice.actions;

export default filterSlice.reducer;
