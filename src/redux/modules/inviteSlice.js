import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance, baseURL } from "../../core/api/axios";

const initialState = {
  invite: [],
  isLoading: false,
  error: null,
};
// 아지트 멤버 초대 경로 수정 필요
export const __postinvite = createAsyncThunk(
  "inviteagit/post",
  async (payload, thunkAPI) => {
    const { agitId, username } = payload;
    const aaa = { username: username };
    try {
      const data = await baseURL.post(`/agit/${agitId}/join`, aaa);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

const inviteSlice = createSlice({
  name: "inviteagit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postinvite.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__postinvite.fulfilled, (state, action) => {
      state.isLoading = false;
      state.invite = action.payload;
    });
    builder.addCase(__postinvite.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default inviteSlice.reducer;
