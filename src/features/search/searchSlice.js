import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedResult: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSelectedResult(state, action) {
      state.selectedResult = action.payload;
      console.log(state);
    },

    // eslint-disable-next-line no-unused-vars
    resetSelectedResult(state, action) {
      state.selectedResult = null;
    },
  },
});

export const { setSelectedResult, resetSelectedResult } = searchSlice.actions;

export default searchSlice.reducer;
