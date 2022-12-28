import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURL } from "../../core/api/axios";

const initialState = {
  data: [{}],
  userInfo: [],
  agitList: [],
};

//유저 가져오기
export const __getUser = createAsyncThunk(
  "main/getUser",
  async (payload, thunkAPI) => {
    //console.log("payload", payload);
    try {
      const data = await baseURL.get(`/user`);
      //console.log(payload);
      //console.log("data", data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//아지트 리스트 가져오기
export const __getAgit = createAsyncThunk(
  "main/getAgit",
  async (payload, thunkAPI) => {
    //console.log("payload", payload);
    try {
      const data = await baseURL.get(`/agit`);
      //console.log(payload);
      //console.log("data", data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userInfoGetSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: {
    //유저 정보 불러오기
    [__getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUser.fulfilled]: (state, action) => {
      //console.log("tagArr", tagArr);
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //아지트 리스트 불러오기
    [__getAgit.pending]: (state) => {
      state.isLoading = true;
    },
    [__getAgit.fulfilled]: (state, action) => {
      //console.log("tagArr", tagArr);
      state.isLoading = false;
      state.agitList = action.payload;
    },
    [__getAgit.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = userInfoGetSlice.actions;
export default userInfoGetSlice.reducer;
