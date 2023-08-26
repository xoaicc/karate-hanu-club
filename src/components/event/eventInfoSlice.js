import { createSlice } from "@reduxjs/toolkit";
import { EVENTS } from "../../data/eventData";

export const eventInfoSlice = createSlice({
    name: "eventInfo",
    initialState: EVENTS,
    reducers: {
        selectEvent: (state, action) => {
            state.isSelected = action.payload;
        }
    }
});

export const { selectEvent } = eventInfoSlice.actions;
export const selectEvents = state => state.events.data;
export const getSelectedId = state => state.events.isSelected;
export default eventInfoSlice.reducer;