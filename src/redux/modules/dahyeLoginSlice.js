// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { instanceApi } from "../../core/api/axios";

// //초기값 설정
// const initialState = {
//   login: {
//     loginId: "",
//     password: "",
//   },
//   error: null,
// };

// // thunk
// export const __postLogin = createAsyncThunk(
//   "login/postLogin",
//   async (payload, thunkAPI) => {
//     try {
//       const { headers, data } = await instanceApi.post(
//         `/member/login`,
//         payload
//       );
//       console.log(headers);
//       localStorage.setItem("authorization", headers.authorization);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       alert("로그인에 실패하였습니다");
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // slice
// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     changeField: (state, { payload: { form, key, value } }) => {
//       state[form][key] = value;
//     },
//     initializeForm: (state, { payload: { form } }) => ({
//       ...state,
//       [form]: {
//         loginId: "",
//         password: "",
//       },
//     }),
//   },
//   extraReducers: {
//     [__postLogin.rejected]: (state, action) => {
//       console.log(action.payload.response.data.msg);
//       alert(action.payload.response.data.msg);
//     },
//   },
// });

// export const { changeField, initializeForm } = loginSlice.actions;
// export default loginSlice.reducer;
