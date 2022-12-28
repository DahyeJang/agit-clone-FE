import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/api/axios";

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
    //console.log("payload", payload);
    try {
      const data = await baseURL.get(`/agit/${payload}/member`);
      //console.log("data", data);
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
      const data = await baseURL.get(`/agit/${payload}`);
      console.log("data", data);
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
    console.log("payload", payload);
    const { postId, content } = payload;
    const postcontent = { content: content };
    try {
      const data = await baseURL.put(`/agit/post/${postId}`, postcontent);
      //console.log("data", data);
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
    //console.log("payload", payload);
    const { id, content } = payload;
    const postComment = { content: content };
    try {
      const data = await baseURL.post(`/post/${id}/comment`, postComment);
      //console.log("data", data.data.data);
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
    //console.log("payload", payload);
    const { postId, commentId } = payload;
    try {
      const data = await baseURL.delete(`/post/${postId}/comment/${commentId}`);
      //console.log("data", data);
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
    //console.log("modifyComment", modifyComment);

    try {
      const data = await baseURL.put(
        `/post/${postId}/comment/${commentId}`,
        modifyComment
      );
      //console.log("data", data);
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
    //console.log(payload);
    const { agitId, username } = payload;
    const aaa = { username: username };
    //console.log("enableButton", enableButton);
    try {
      const data = await baseURL.post(`/agit/${agitId}/join`, aaa);
      console.log("data", data);
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
    //아지트 멤버 초대하기
    [__postInvite.pending]: (state) => {
      state.isLoading = true;
    },
    [__postInvite.fulfilled]: (state, action) => {
      console.log(state.agitMember);
      const newMember = action.meta.arg.username;
      //state.agitMember = [...state.agitMember, newMember];
      state.isLoading = false;
      state.member = action.payload;
      alert(action.payload.msg);
      //state.statusCode = action.payload.statusCode;
      //state.msg = action.payload.msg;
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

      //state.data.postList.commentList = [...newComment];
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
      //const { newComment } = action.payload;
      //console.log("aaa", state.data.postList.commentList);
      //state.data.postList.commentList = [...newComment];
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
      //console.log("state", state);
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
      //console.log("state", state);
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
