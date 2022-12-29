import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../core/api/axios";

const initialState = {
  like: [],
  hate: [],
  isLoading: false,
  error: null,
};

export const __postlike = createAsyncThunk(
  "like",
  async (payload, thunkAPI) => {
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