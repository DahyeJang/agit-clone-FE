import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instanceApi } from "../../core/api/axios";

// 초기값 처리
const initialState = {
  signUp: {
    loginId: "",
    password: "",
    passwordCheck: "",
    nickname: "",
    description: "",
  },
  error: null,
  result: null,
  isLoginIdValid: false,
  isNicknameValid: false,
};

// thunk
// 회원가입 버튼 체크
export const __postSignUp = createAsyncThunk(
  "signUpPost/postSignUp",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceApi.post("/member/signup", payload);
      // console.log(data);
      // const { data } = await instance.post("/member/signup", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      alert("회원가입에 실패하였습니다");
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 아이디 중복 체크
export const __postCheckId = createAsyncThunk(
  "signUpPost/postCheckId",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instanceApi.post(
        "/member/signup/loginid",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 닉네임 중복 체크
export const __postCheckNickname = createAsyncThunk(
  "signUpPost/postCheckNickname",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instanceApi.post(
        "/member/signup/nickname",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// slice
const signUpSlice = createSlice({
  name: "signUpPost",
  initialState,
  reducers: {
    changeField: (state, { payload: { form, key, value } }) => {
      state[form][key] = value;
    },
    initializeForm: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },

  extraReducers: {
    // 회원가입 버튼 클릭
    [__postSignUp.fulfilled]: (state, action) => {
      if (action.payload.result === "success") {
        state.result = "success";
        alert(action.payload.msg);
      } else {
        alert(action.payload.msg);
      }
    },
    [__postSignUp.rejected]: (state, action) => {
      console.log(action.payload.response.data.msg);
      alert(action.payload.response.data.msg);
    },
    // 아이디 체크
    [__postCheckId.fulfilled]: (state, action) => {
      if (action.payload.result === "success") {
        state.result = "success";
        state.isLoginIdValid = true;
        alert(action.payload.msg);
      } else {
        alert(action.payload.msg);
      }
    },
    [__postCheckId.rejected]: (state, action) => {
      console.log(action.payload.response.data.msg);
      alert(action.payload.response.data.msg);
    },
    // 닉네임 체크
    [__postCheckNickname.fulfilled]: (state, action) => {
      if (action.payload.result === "success") {
        state.result = "success";
        state.isNicknameValid = true;
        console.log(state.isNicknameValid);
        alert(action.payload.msg);
      } else {
        alert(action.payload.msg);
        console.log(action.payload.msg);
      }
    },
    [__postCheckNickname.rejected]: (state, action) => {
      // 통신 오류 값 정리
      console.log(action.payload.response.data.msg);
      alert(action.payload.response.data.msg);
    },
  },
});

export const { changeField, initializeForm } = signUpSlice.actions;
export default signUpSlice.reducer;
