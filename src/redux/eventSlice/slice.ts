import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchEvents } from "./asyncActions";
import { EventObject, EventObjectState, Status } from "./types";

const initialState: EventObjectState = {
  items: [],
  status: Status.LOADING
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<EventObject[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state, action) => {
      state.items = [];
      state.status = Status.LOADING;
    })

    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    })

    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.items = [];
      state.status = Status.ERROR;
    })
  }
});

export const { setItems } = eventsSlice.actions;

export default eventsSlice.reducer;
