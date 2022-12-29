import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURL } from "../../core/api/axios";

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const __postcontents = createAsyncThunk(
  "contents/post",
  async (payload, thunkAPI) => {
    const agitId = payload.agitId
    try {
      const data = await baseURL.post(`/agit/${agitId}/post`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const __delContent = createAsyncThunk(
  "contents/delete",
  async (payload, thunkAPI) => {
    const agitId = payload
    try {
      const data = await baseURL.delete(`/agit/post/${agitId}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postcontents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__postcontents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = [ ...state.contents, action.payload];
    });
    builder.addCase(__postcontents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__delContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = [ ...state.contents, action.payload];
    });
  },
});

export default contentsSlice.reducer;
