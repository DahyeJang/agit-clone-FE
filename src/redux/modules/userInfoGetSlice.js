import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/api/axios";

const initialState = {
  data: [{}],
};

export const __getUser = createAsyncThunk(
  "main/getUser",
  async (payload, thunkAPI) => {
    //console.log("payload", payload);
    try {
      const data = await instance.get(`/user`);
      //console.log(payload);
      console.log("data", data);
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
      state.data = action.payload;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = userInfoGetSlice.actions;
export default userInfoGetSlice.reducer;
