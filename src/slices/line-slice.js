import { createSlice } from "@reduxjs/toolkit";

const initialLineSlice = { showLine: true, tab: 'Home' };

const lineSlice = createSlice({
  name: "line",
  initialState: initialLineSlice,
  reducers: {
    replaceShowLine(state, action) {
      state.showLine = action.payload.showLine;
      state.tab = action.payload.tab;
    },
  },
});

export default lineSlice;

export const lineSliceActions = lineSlice.actions;
