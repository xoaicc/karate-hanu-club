import { createSlice } from "@reduxjs/toolkit";
import { EVENTS } from "../../data/eventData";

export const eventInfoSlice = createSlice({
    name: "eventInfo",
    initialState: EVENTS,
    reducers: {}
});

export const selectEvents = state => state.events;
export default eventInfoSlice.reducer;