import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURL } from "../../core/api/axios";

const initialState = {
  like: [],
  hate: [],
  isLoading: false,
  error: null,
};
// 아지트 멤버 초대 경로 수정 필요
export const __postlike = createAsyncThunk(
  "like",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await baseURL.post(`/post/${payload}/like`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const __posthate = createAsyncThunk(
  "hate",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await baseURL.post(`/post/${payload}/hate`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

const likeSlice = createSlice({
  name: "like/hate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postlike.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__postlike.fulfilled, (state, action) => {
      state.isLoading = false;
      state.like = action.payload;
    });
    builder.addCase(__postlike.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__posthate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__posthate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hate = action.payload;
    });
    builder.addCase(__posthate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default likeSlice.reducer;