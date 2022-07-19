import { createSlice } from "@reduxjs/toolkit";

import { mock as interviewer_mock } from "../features/interviewer_mock";

const initialState = {
  getUserInfo: "INIT",
  userInfo: null,
  error: null,
};

export const onloadLoginRequest = (id, psw) => async (dispatch) => {
  dispatch(getUserState());
  try {
    // const response = await axios.get("/api/login", {
    //   params: { id, psw },
    // });
    const response = interviewer_mock;
    // 응답 출력 => 나중에 삭제
    console.log("response");
    console.log(response);
    dispatch(getUserStateSuccess(response.data.data));
  } catch (error) {
    // 에러 출력 => 나중에 삭제
    console.log("error");
    console.log(error);
    dispatch(getUserStateFailure(error.response.data));
  }
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getUserState: (state) => {
      console.log("대기");
      return {
        ...state,
        getUserInfo: "WAITING",
      };
    },
    getUserStateSuccess: (state, action) => {
      console.log("성공");
      return {
        ...state,
        getUserInfo: "SUCCESS",
        ...action.payload,
      };
    },
    getUserStateFailure: (state, action) => {
      console.log("실패");
      return {
        ...state,
        getUserInfo: "FAILURE",
        ...action.payload,
      };
    },
  },
});

export const { getUserState, getUserStateSuccess, getUserStateFailure } =
  loginSlice.actions;

export default loginSlice.reducer;
