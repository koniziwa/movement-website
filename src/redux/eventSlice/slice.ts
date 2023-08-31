import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchEvents } from "./asyncActions";
import { EventObject, EventObjectState, Status } from "./types";
import { sortByDate } from "../../utils/sortByDate";

const initialState: EventObjectState = {
  items: [],
  status: Status.LOADING,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<EventObject[]>) {
      state.items = sortByDate(action.payload);
    },
    sortItems(state, action: PayloadAction<string>) {
      if (action.payload === "desc") {
        state.items = sortByDate(state.items);
      } else {
        state.items = state.items.reverse();
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state, action) => {
      state.items = [];
      state.status = Status.LOADING;
    });

    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.items = sortByDate(action.payload);
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setItems, sortItems } = eventsSlice.actions;

export default eventsSlice.reducer;
