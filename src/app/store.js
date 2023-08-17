import { configureStore } from "@reduxjs/toolkit";
import memberInfoSlice from "../components/member/memberInfoSlice.js";

export default configureStore({
    reducer: {
        members: memberInfoSlice
    }
});