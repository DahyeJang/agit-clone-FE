import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

const initialState = {
  signup: [],
  isLoading: false,
  error: null,
}

export const __postsignup = createAsyncThunk(
  "signup",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/user/signup", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
)

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postsignup.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(__postsignup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.signup = action.payload;
    })
    builder.addCase(__postsignup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
})

export default signupSlice.reducer;