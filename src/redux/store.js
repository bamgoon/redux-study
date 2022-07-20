import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "redux/features/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
