import { configureStore } from "@reduxjs/toolkit";
import lineSlice from "../slices/line-slice";

const store = configureStore({
  reducer: {
    line: lineSlice.reducer,
  },
});

export default store;
