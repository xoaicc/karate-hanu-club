import { createSlice } from "@reduxjs/toolkit";
import { MOMENTS } from "../../data/momentData";

export const memberInfoSlice = createSlice({
    name: "memberInfo",
    initialState: MEMBERS,
    reducers: {}
});

export const selectMembers = state => state.members;
export default memberInfoSlice.reducer;