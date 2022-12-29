import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import userInfoGet from "../modules/userInfoGetSlice";
import agitInfoSlice from "../modules/agitInfoSlice";
import likeSlice from "../modules/likeSlice";

const store = configureStore({
  reducer: { userInfoGet, agitInfoSlice, likeSlice },
});

export default store;
