import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/api/axios";

const initialState = {
  data: {},
  agitMember: [{}],
};

//아지트 멤버 가져오기
export const __getAgitMember = createAsyncThunk(
  "agitInfo/getAgitMember",
  async (payload, thunkAPI) => {
    // console.log("payload", payload);
    try {
      const data = await instance.get(`/agit/${payload}/member`);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//아지트 포스트 가져오기
export const __getAgitPost = createAsyncThunk(
  "agitInfo/__getAgitPost",
  async (payload, thunkAPI) => {
    //console.log("payload", payload);
    try {
      const data = await instance.get(`/agit/${payload}`);
      //console.log("data", data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const agitInfoSlice = createSlice({
  name: "agitInfo",
  initialState,
  reducers: {},
  extraReducers: {
    //유저 정보 불러오기
    [__getAgitMember.pending]: (state) => {
      state.isLoading = true;
    },
    [__getAgitMember.fulfilled]: (state, action) => {
      //console.log("tagArr", tagArr);
      state.isLoading = false;
      state.agitMember = action.payload;
    },
    [__getAgitMember.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //아지트 포스트 불러오기
    [__getAgitPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getAgitPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getAgitPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = agitInfoSlice.actions;
export default agitInfoSlice.reducer;
