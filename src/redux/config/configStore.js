import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import userInfoGet from "../modules/userInfoGetSlice";
import agitInfoSlice from "../modules/agitInfoSlice";

const store = configureStore({
  reducer: { userInfoGet, agitInfoSlice },
});

export default store;
