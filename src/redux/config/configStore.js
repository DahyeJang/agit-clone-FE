import { configureStore } from "@reduxjs/toolkit";
/**
 * import 해온 것은 slice.reducer 입니다.
 */
import userInfoGet from "../modules/userInfoGetSlice";

const store = configureStore({
  reducer: { userInfoGet },
});

export default store;
