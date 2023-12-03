import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/userReducers";

const store = configureStore({
  reducer: {
    user: userReducers,
  },
});

export default store;
