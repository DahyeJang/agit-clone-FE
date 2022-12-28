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
    //console.log(payload);
    const { agitId, username } = payload;
    const aaa = { username: username };
    //console.log("enableButton", enableButton);
    try {
      const data = await baseURL.post(`/agit/${agitId}/join`, aaa);
      //console.log("data", data);
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
      //console.log("state.invite", state.invite);
    });
    builder.addCase(__postinvite.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default inviteSlice.reducer;
