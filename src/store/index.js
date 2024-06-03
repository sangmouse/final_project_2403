import { configureStore } from "@reduxjs/toolkit";
import userReducer from "store/user/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
