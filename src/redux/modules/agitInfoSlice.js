import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../core/api/axios";

const initialState = {
  data: {
    postList: [
      {
        id: 1,
        username: "",
        nickname: "",
        content: "",
        likeCount: 0,
        hateCount: 0,
        postLike: null,
        createdAt: "",
        IsModified: false,
        commentList: [
          {
            id: 1,
            username: "",
            nickname: "",
            IsModified: true,
            content: "",
            createdAt: "",
          },
        ],
      },
    ],
  },
  agitMember: [{}],
  statusCode: "",
  msg: "",
  member: {},
};

//아지트 멤버 가져오기
export const __getAgitMember = createAsyncThunk(
  "agitInfo/getAgitMember",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.get(`/agit/${payload}/member`);
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
    try {
      const data = await baseURL.get(`/agit/${payload}`);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//아지트 포스트 수정하기
export const __modifyPost = createAsyncThunk(
  "agitInfo/__modifyPost",
  async (payload, thunkAPI) => {
    const { postId, content } = payload;
    const postcontent = { content: content };
    try {
      const data = await baseURL.put(`/agit/post/${postId}`, postcontent);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//아지트 댓글 쓰기
export const __postComment = createAsyncThunk(
  "agitInfo/__postComment",
  async (payload, thunkAPI) => {
    const { id, content } = payload;
    const postComment = { content: content };
    try {
      const data = await baseURL.post(`/post/${id}/comment`, postComment);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//아지트 댓글 삭제하기
export const __deleteComment = createAsyncThunk(
  "agitInfo/__deleteComment",
  async (payload, thunkAPI) => {
    const { postId, commentId } = payload;
    try {
      const data = await baseURL.delete(`/post/${postId}/comment/${commentId}`);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//아지트 댓글 수정하기
export const __modifyComment = createAsyncThunk(
  "agitInfo/__modifyComment",
  async (payload, thunkAPI) => {
    const { postId, commentId, content } = payload;
    const modifyComment = { content: content };
    try {
      const data = await baseURL.put(
        `/post/${postId}/comment/${commentId}`,
        modifyComment
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//아지트 회원 초대하기
export const __postInvite = createAsyncThunk(
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
    //아지트 멤버 초대하기
    [__postInvite.pending]: (state) => {
      state.isLoading = true;
    },
    [__postInvite.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.member = action.payload;
      alert(action.payload.msg);
    },
    [__postInvite.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },
    //아지트 댓글 쓰기
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //아지트 댓글 삭제하기
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },
    //아지트 댓글 수정하기
    [__modifyComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifyComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__modifyComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },
    //포스트 내용 수정하기
    [__modifyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__modifyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.msg);
    },
  },
});

export const {} = agitInfoSlice.actions;
export default agitInfoSlice.reducer;
