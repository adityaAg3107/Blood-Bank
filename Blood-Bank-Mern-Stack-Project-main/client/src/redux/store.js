import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";

const store = configureStore({ // create store
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
