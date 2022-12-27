import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURL } from "../../core/api/axios";

const initialState = {
  createagit: [],
  isLoading: false,
  error: null,
};

export const __postcreateagit = createAsyncThunk(
  "createagit",
  async (payload, thunkAPI) => {
    //console.log(payload);
    try {
      const data = await baseURL.post("/agit", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

const agitCreateSlice = createSlice({
  name: "createagit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postcreateagit.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__postcreateagit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.createagit = action.payload;
    });
    builder.addCase(__postcreateagit.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default agitCreateSlice.reducer;
