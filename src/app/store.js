import { configureStore } from "@reduxjs/toolkit";
import memberInfoSlice from "../components/member/memberInfoSlice.js";
import eventInfoSlice from "../components/event/eventInfoSlice.js";

export default configureStore({
    reducer: {
        members: memberInfoSlice,
        events: eventInfoSlice,
    }
});